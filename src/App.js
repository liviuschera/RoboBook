import { Component } from "react";

import "./App.css";



class App extends Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      users: [],
      filteredUsers: [],
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    if (this.state.users.length === 0) {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=33&is_json=true"
      );
      const users = await response.json();
      this.setState({ users, filteredUsers: users }, () => console.log("inputval: ", this.state));
    }
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search users"
          onChange={(event) => {
            console.log("event: ", event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredUsers = this.state.users.filter(user => user.first_name.toLocaleLowerCase().includes(searchString) || user.last_name.toLocaleLowerCase().includes(searchString));
            this.setState(
              () => {
                return { filteredUsers: filteredUsers };
              },
              () => {
                console.log("render => ", this.state);
              }
            );
          }
          }
        />
        {this.state.filteredUsers.map((user) => {
          return (
            <div key={user.uid}>
              <span>
                {user.first_name} {user.last_name}
              </span>
              <span>
                &nbsp;
              </span>
            </div>

          );
        })
        }

      </div>
    );
  }
}

export default App;
