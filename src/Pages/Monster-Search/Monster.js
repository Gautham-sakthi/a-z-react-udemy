import React, { useState, useEffect } from "react";
import CardList from "../../Components/card-list/CardList";
import Searchbox from "../../Components/searchbox/Searchbox";
import "./MonsterStyle.css";

function Monster() {
  const [state, setState] = useState(() => {
    return { monsters: [], error: "" };
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        return setState({ monsters: data });
      })
      .catch((err) => {
        return setState({ error: err });
      });
  }, []);

  const { monsters } = state;
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().trim().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Monsters World Search</h1>
      <Searchbox
        setSearch={setSearch}
        search={search}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default Monster;
