import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom"; // For navigation

const RecipeListing = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h3 className="text-xl font-bold">{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-indigo-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

// Define PropTypes for the component
RecipeListing.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeListing;
