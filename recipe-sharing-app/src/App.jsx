// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm"; // Import AddRecipeForm

function App() {
  return (
    <Router>
      <div>
        <SearchBar /> {/* SearchBar component included in the layout */}
        <AddRecipeForm /> {/* AddRecipeForm component included in the layout */}
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
