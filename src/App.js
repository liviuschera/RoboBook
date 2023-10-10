import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";



class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchString: [],
    };
  }

  async componentDidMount() {
    if (this.state.robots.length === 0) {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=33&is_json=true"
      );
      const robots = await response.json();
      this.setState({ robots });
    }
  }
  onSearchChange = (event) => {
    console.log("event: ", event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchString };
      }
    );
  };

  render() {
    const { robots, searchString } = this.state;

    const filteredRobots = robots.filter(robot => {
      const fullName = `${robot.first_name}${robot.last_name}`.toLocaleLowerCase();
      return fullName.includes(searchString);
    });


    return (
      <div className="App">
        <h1 className="app-name">RoboBook</h1>
        {this.state.robots.length ?
          (
            <>
              <SearchBox className="search-box" onChangeHandler={this.onSearchChange} placeholder="Search for robots" />
              <CardList robots={filteredRobots} />
            </>
          )
          : "Loading data..."}

      </div>
    );
  }
}

export default App;
