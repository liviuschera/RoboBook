import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const users = await fetch(
      "https://random-data-api.com/api/v2/users?size=11&is_json=true"
    ).then((res) => res.json());
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <div key={user.uid}>
              <p>{user.last_name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
