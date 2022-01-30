import React from "react";
import "./searchboxstyle.css";
function Searchbox({ setSearch, search, placeholder }) {
  return (
    <input
      className="search"
      type="text"
      value={search}
      placeholder={placeholder}
      onChange={(e) => {
        return setSearch((prev) => (prev = e.target.value));
      }}
    />
  );
}

export default Searchbox;
