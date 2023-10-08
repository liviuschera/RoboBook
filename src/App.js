import { Component } from "react";

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
      this.setState({ users, filteredUsers: users });
    }
  }

  render() {
    const { users, searchString } = this.state;

    const filteredUsers = users.filter(user => {
      const fullName = `${user.first_name}${user.last_name}`.toLocaleLowerCase();
      return fullName.includes(searchString);
    });

    const onSearchChange = (event) => {
      console.log("event: ", event.target.value);
      const searchString = event.target.value.toLocaleLowerCase();
      this.setState(
        () => {
          return { searchString };
        }
      );
    }


    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search users"
          onChange={onSearchChange}
        />
        {filteredUsers.map((user) => {
          return (
            <div key={user.uid}>
              <span>
                {user.first_name} {user.last_name}
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
