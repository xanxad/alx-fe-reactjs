// src/App.jsx
import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        GitHub User Search
      </h1>
      <Search setResults={setResults} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded-md">
            <p className="font-bold">{user.login}</p>
            <p>Location: {user.location || "Not specified"}</p>
            <p>Repos: {user.public_repos || "N/A"}</p>
            <a href={user.html_url} className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
