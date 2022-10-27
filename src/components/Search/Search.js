import React, { useState } from "react";

const Search = ({ onSearch }, props) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        color="black"
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
