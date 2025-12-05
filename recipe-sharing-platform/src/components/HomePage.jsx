// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
// Import the JSON file directly
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load data when the component mounts
  useEffect(() => {
    // In a real application, you would fetch('api/recipes').
    // Here, we load the imported JSON data directly into state.
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Our Recipe Collection
      </h1>
      
      {/* Responsive Grid Layout (Step 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

// Component for a single Recipe Card (Step 3: Styling)
const RecipeCard = ({ recipe }) => (
  // Styling Requirements: Consistent, responsive design, and hover effects
  <div
    className="bg-white rounded-xl shadow-lg 
               hover:shadow-2xl hover:scale-[1.02] 
               transition-all duration-300 ease-in-out 
               overflow-hidden cursor-pointer"
  >
    {/* Recipe Image */}
    <img
      className="w-full h-48 object-cover object-center"
      src={recipe.image}
      alt={recipe.title}
      loading="lazy"
    />

    <div className="p-5">
      {/* Recipe Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
        {recipe.title}
      </h2>

      {/* Recipe Summary */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {recipe.summary}
      </p>

      {/* Link to Detail (placeholder for now) */}
      <a 
        href={`/recipe/${recipe.id}`} // Placeholder link
        className="inline-block bg-blue-600 text-white text-center 
                   py-2 px-4 rounded-full font-semibold 
                   hover:bg-blue-700 transition duration-150"
        onClick={(e) => { e.preventDefault(); console.log('Viewing recipe:', recipe.id); }}
      >
        View Recipe
      </a>
    </div>
  </div>
);

export default HomePage;

