// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

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

  // --- JSX for displaying the recipe details ---
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10 max-w-5xl">
      
      {/* Back Link */}
      <Link 
        to="/" 
        className="text-blue-600 hover:text-blue-800 transition mb-6 inline-block font-semibold"
      >
        &larr; Back to Recipes
      </Link>

      {/* Recipe Header (Image and Title) - USED shadow-lg HERE */}
      <div className="bg-white **shadow-lg** rounded-xl overflow-hidden mb-8">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-80 object-cover" 
        />
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{recipe.title}</h1>
          <p className="text-gray-600 text-lg">Cuisine: **{recipe.cuisine}**</p>
          <p className="text-gray-600 text-lg">Prep Time: **{recipe.prepTime}**</p>
          <p className="text-gray-600 text-lg">Cook Time: **{recipe.cookTime}**</p>
        </div>
      </div>

      {/* Ingredients Section - USED shadow-md HERE */}
      <div className="bg-white **shadow-md** rounded-xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section - USED shadow-md HERE */}
      <div className="bg-white **shadow-md** rounded-xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="pl-2">
              <span className="font-semibold text-gray-900">Step {index + 1}:</span> {step}
            </li>
          ))}
        </ol>
      </div>
      
    </div>
  );
};

export default RecipeDetail;

