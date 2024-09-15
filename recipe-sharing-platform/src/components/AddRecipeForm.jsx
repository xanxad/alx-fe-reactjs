import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || ingredients === "" || steps === "") {
      setError("All fields are required");
      return;
    }

    // Add your submit logic here, like sending the data to an API
    console.log({ title, ingredients, steps });

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter recipe title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-bold mb-2"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter ingredients, separated by commas"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter preparation steps"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
