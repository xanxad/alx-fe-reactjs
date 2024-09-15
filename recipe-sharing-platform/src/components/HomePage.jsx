// src/components/HomePage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="text-center mb-8">
        {/* Add link to AddRecipeForm */}
        <Link
          to="/add-recipe"
          className="text-blue-500 hover:underline text-lg font-bold"
        >
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="max-w-sm bg-white shadow-lg rounded-lg hover:shadow-xl transition-all overflow-hidden"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 mt-4 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <p className="text-blue-500 hover:underline mt-4">
                  View Recipe
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
