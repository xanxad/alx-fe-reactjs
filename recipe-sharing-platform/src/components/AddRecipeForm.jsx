import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Recipe:", { title, ingredients, steps });
      // Reset form after submission
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Add New Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            className="w-full p-2 border border-gray-300 rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            className="w-full p-2 border border-gray-300 rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          ></textarea>
          {errors.steps && <p className="text-red-500">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
