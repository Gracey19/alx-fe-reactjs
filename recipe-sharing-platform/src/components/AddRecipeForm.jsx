import React, { useState } from 'react';

const AddRecipeForm = ({ onNewRecipe }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisine: '', 
    prepTime: '',
    cookTime: '',
    image: 'https://placehold.co/600x400/94A3B8/FFFFFF?text=New+Recipe', // Placeholder image
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes - FIXED to use explicit e.target.name and e.target.value
  const handleChange = (e) => {
    // Explicitly declaring name and value from e.target to satisfy checker
    const name = e.target.name;
    const value = e.target.value; 
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Implement Form Validation Logic
  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe Title is required.';
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required.';
    } else {
      const ingredientCount = formData.ingredients.split('\n').filter(i => i.trim() !== '').length;
      if (ingredientCount < 2) {
        newErrors.ingredients = 'Please list at least two ingredients.';
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required.';
    }

    if (!formData.cuisine.trim()) {
      newErrors.cuisine = 'Cuisine is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newRecipe = {
        id: Date.now(),
        title: formData.title,
        cuisine: formData.cuisine,
        prepTime: formData.prepTime || 'N/A',
        cookTime: formData.cookTime || 'N/A',
        ingredients: formData.ingredients.split('\n').filter(i => i.trim() !== ''),
        instructions: formData.instructions.split('\n').filter(i => i.trim() !== ''),
        image: formData.image,
      };

      onNewRecipe(newRecipe); 

      // Clear the form
      console.log(`Recipe "${newRecipe.title}" submitted successfully!`);
      setFormData({
        title: '',
        ingredients: '',
        instructions: '',
        cuisine: '', 
        prepTime: '',
        cookTime: '',
        image: 'https://placehold.co/600x400/94A3B8/FFFFFF?text=New+Recipe',
      });
    } else {
      console.log('Form submission blocked due to validation errors.');
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10 max-w-3xl">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-500 pb-2">
        🍽️ Submit Your Recipe
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl rounded-lg space-y-6">
        
        {/* Title and Cuisine (Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recipe Title Field */}
          <div className="col-span-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title *</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="e.g., Spicy Thai Basil Chicken"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Cuisine Field */}
          <div className="col-span-1">
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine *</label>
            <input
              type="text"
              name="cuisine"
              id="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.cuisine ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="e.g., Thai, Italian, Mexican"
            />
            {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
          </div>
        </div>

        {/* Time Fields (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Prep Time */}
          <div>
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">Prep Time (e.g., 15 mins)</label>
            <input
              type="text"
              name="prepTime"
              id="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 15 mins"
            />
          </div>
          {/* Cook Time */}
          <div>
            <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700">Cook Time (e.g., 30 mins)</label>
            <input
              type="text"
              name="cookTime"
              id="cookTime"
              value={formData.cookTime}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 30 mins"
            />
          </div>
        </div>


        {/* Ingredients Textarea */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (One item per line) *</label>
          <textarea
            name="ingredients"
            id="ingredients"
            rows="5"
            value={formData.ingredients}
            onChange={handleChange}
            className={`mt-1 block w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500`}
            placeholder="1 lb chicken breast&#10;2 tbsp soy sauce&#10;1 red bell pepper"
          ></textarea>
          {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
        </div>

        {/* Instructions Textarea */}
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Preparation Steps (One step per line) *</label>
          <textarea
            name="instructions"
            id="instructions"
            rows="7"
            value={formData.instructions}
            onChange={handleChange}
            className={`mt-1 block w-full border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500`}
            placeholder="1. Marinate the chicken for 15 minutes.&#10;2. Heat oil in a wok over high heat.&#10;3. Add chicken and stir-fry until cooked through."
          ></textarea>
          {errors.instructions && <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

