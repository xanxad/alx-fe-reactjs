import { useState } from "react";
import fetchUser from "../services/githubService"; // Adjust the path as necessary

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchUser(username);
    setUserData(data); // Update state with user data
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub user..."
      />
      <button onClick={handleSearch}>Search</button>
      {userData && <div>{userData.name}</div>} {/* Display user data */}
    </div>
  );
};

export default SearchBar;
