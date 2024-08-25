import PropTypes from "prop-types"; // Import PropTypes
import { useRecipeStore } from "./recipeStore"; // Adjust the path if needed

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};

// Define prop types for RecipeDetails
RecipeDetails.propTypes = {
  recipeId: PropTypes.number.isRequired, // Adjust type based on your actual data
};

export default RecipeDetails;
