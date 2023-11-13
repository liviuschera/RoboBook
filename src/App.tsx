import { useEffect, useState, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Robot = {
  uid: string;
  first_name: string;
  last_name: string;
  avatar: string;
  employment: {
    title: string;
    key_skill: string;
  };
  address: {
    city: string;
    state: string;
  };
};

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchString, setSearchString] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    const fetchRobots = async () => {
      const robots = await getData<Robot[]>(
        "https://random-data-api.com/api/v2/users?size=33&is_json=true"
      );
      setRobots(robots);
    };

    fetchRobots();
  }, []);

  useEffect(() => {
    const filterRobots = robots.filter((robot) => {
      const fullName =
        `${robot.first_name}${robot.last_name}`.toLocaleLowerCase();
      return fullName.includes(searchString);
    });
    setFilteredRobots(filterRobots);
  }, [robots, searchString]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log("event: ", event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-name">RoboBook</h1>
      {robots.length ? (
        <>
          <SearchBox
            className="search-box"
            onChangeHandler={onSearchChange}
            placeholder="Search for robots"
          />
          <CardList robots={filteredRobots} />
        </>
      ) : (
        "Loading data..."
      )}
    </div>
  );
};

export default App;
