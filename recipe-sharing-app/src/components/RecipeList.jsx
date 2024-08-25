import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useRecipeStore from "./recipeStore"; // Adjust the path as needed
import RecipeListing from "./RecipeListing"; // Adjust the path as needed

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Assuming you are using filteredRecipes

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              <RecipeListing recipe={recipe} />
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipeList;
