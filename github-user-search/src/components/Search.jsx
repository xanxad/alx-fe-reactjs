import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null); // Reset user state on new search

    try {
      const response = await handleSearch(inputValue);
      if (!response) {
        setError("Looks like we can't find the user");
      } else {
        setUser(response);
      }
    } catch (err) {
      setError("An error occurred while fetching the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
