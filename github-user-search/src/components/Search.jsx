// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = ({ setResults }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const users = await searchUsers(username, location, minRepos);
    setResults(users.items); // Extract users from the API response
  };

  return (
    <form
      onSubmit={handleSearch}
      className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Min Repos"
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
    </form>
  );
};

export default Search;
