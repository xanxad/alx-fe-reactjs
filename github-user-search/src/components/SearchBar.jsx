const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
