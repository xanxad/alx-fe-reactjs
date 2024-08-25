import { useRecipeStore } from "./recipeStore";
import RecipeListing from "./RecipeListing"; // Import the new component

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes.map((recipe) => (
          <RecipeListing key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
