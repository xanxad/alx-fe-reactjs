import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);
    try {
      const data = await fetchUserData(searchParams, 1);
      setUsers(data.items);
      setHasMore(data.total_count > data.items.length);
    } catch (err) {
      setError("An error occurred while searching for users");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchUserData(searchParams, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
      setHasMore(data.total_count > users.length + data.items.length);
    } catch (err) {
      setError("An error occurred while loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="minRepos"
            value={searchParams.minRepos}
            onChange={handleInputChange}
            placeholder="Minimum repositories"
            className="px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{user.login}</h2>
            {user.location && <p className="text-gray-600">{user.location}</p>}
            <p className="text-gray-600">Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
