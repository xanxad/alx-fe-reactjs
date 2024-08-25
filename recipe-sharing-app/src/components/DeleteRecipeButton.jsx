// src/components/DeleteRecipeButton.jsx

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore"; // Ensure the path is correct

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to the homepage or any other page after deletion
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Delete Recipe
    </button>
  );
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired,
};

export default DeleteRecipeButton;
