// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react'; // <-- IMPORT useEffect
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  // 1. Use useState to store the recipe data
  const [recipe, setRecipe] = useState(null); 

  // 2. Use useEffect to find and set the recipe when the component mounts or the ID changes
  useEffect(() => {
    // Find the recipe matching the ID
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]); // <-- Dependency array ensures it re-runs if the URL 'id' changes

  if (!recipe) {
    return (
      <div className="container mx-auto p-8 text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600">Recipe Not Found or Loading...</h1>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">
          Go back to Home
        </Link>
      </div>
    );
  }

  // The rest of your component's JSX remains the same, 
  // using the 'recipe' variable from state.
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10 max-w-5xl">
      {/* ... rest of the RecipeDetail JSX using the 'recipe' object ... */}
      <Link to="/" className="text-blue-600 hover:text-blue-800 transition mb-6 inline-block font-semibold">
        &larr; Back to Recipes
      </Link>
      {/* ... the rest of the styled divs for image, ingredients, and instructions ... */}
    </div>
  );
};

export default RecipeDetail;

