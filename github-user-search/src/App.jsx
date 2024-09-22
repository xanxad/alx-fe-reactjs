import { useState } from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar handleSearch={handleSearch} />
      <p>Search Term: {searchTerm}</p>
    </div>
  );
};

export default App;
