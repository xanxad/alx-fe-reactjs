import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
