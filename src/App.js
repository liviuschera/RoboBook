import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";



class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchString: [],
    };
  }

  async componentDidMount() {
    if (this.state.users.length === 0) {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=33&is_json=true"
      );
      const users = await response.json();
      this.setState({ users });
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
    const { users, searchString } = this.state;

    const filteredUsers = users.filter(user => {
      const fullName = `${user.first_name}${user.last_name}`.toLocaleLowerCase();
      return fullName.includes(searchString);
    });


    return (
      <div className="App">
        {this.state.users.length ?
          (
            <>
              <SearchBox className="search-box" onChangeHandler={this.onSearchChange} placeholder="Search for users" />
              <CardList users={filteredUsers} />
            </>
          )
          : "Loading data..."}

      </div>
    );
  }
}

export default App;
