// src/components/RecipeDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json'; // Import your mock data

const RecipeDetail = () => {
  // Use useParams to get the 'id' from the URL (e.g., /recipe/1)
  const { id } = useParams();
  
  // Find the recipe by matching the URL ID (parseInt is necessary because URL params are strings)
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container mx-auto p-8 text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600">Recipe Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">
          Go back to Home
        </Link>
      </div>
    );
  }

  // Styling Requirements: Readable text, cards/sections for ingredients/steps, responsive design
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10 max-w-5xl">
      <Link to="/" className="text-blue-600 hover:text-blue-800 transition mb-6 inline-block font-semibold">
        &larr; Back to Recipes
      </Link>
      
      <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-10">
        
        {/* Title and Image */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {recipe.title}
        </h1>
        
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" 
        />
        
        <p className="text-xl italic text-gray-700 mb-10 leading-relaxed border-b pb-4">
          {recipe.summary}
        </p>

        {/* Ingredients and Instructions Sections (Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ingredients */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg text-gray-800">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="pl-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeDetail;

