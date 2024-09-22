import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar"; // Adjust the path as necessary
import "./App.css"; // Optional: import your CSS file

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>GitHub User Search</h1>
        <SearchBar /> {/* Include the SearchBar component */}
        <Routes>
          {/* Define other routes if needed */}
          {/* Example: <Route path="/user/:username" element={<UserProfile />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
