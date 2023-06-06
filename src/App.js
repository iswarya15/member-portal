import { useEffect, useState } from "react";

import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setUsers(json);
        setFilteredUsers(json);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [searchField]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>User Portal</h2>
        <SearchBox
          placeholder="Search user.."
          handleChange={(e) => setSearchField(e.target.value)}
        />
        <CardList name="Ish" users={filteredUsers}></CardList>
      </header>
    </div>
  );
}

export default App;
//Click1 => Nothing happens instead handleClick1 executes as soon as the component renders (we're invoking the function when the component renders)
//Click2 => button 1 clicked
//Click3 => button 1 clicked
//Click4 => button 3 clicked
