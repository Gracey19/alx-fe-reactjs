import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';

// --- Inline SVG Icon Components ---
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const HeartIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
);
const FlameIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38.5-2.5 2.5-2.5S16 9.38 16 12c0 2.45-3 6-5.5 6A2.5 2.5 0 0 1 8.5 14.5Z"></path><path d="M14.5 7.5A2.5 2.5 0 0 0 17 5c0-1.38.5-2.5 2.5-2.5S22 3.38 22 5c0 2.45-3 6-5.5 6A2.5 2.5 0 0 1 14.5 7.5Z"></path><path d="M1.5 14.5A2.5 2.5 0 0 0 4 12c0-1.38.5-2.5 2.5-2.5S9 9.38 9 12c0 2.45-3 6-5.5 6A2.5 2.5 0 0 1 1.5 14.5Z"></path></svg>
);
const SoupIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 0 0 9-9c0-6-4-10-9-10S3 6 3 12a9 9 0 0 0 9 9Z"></path><path d="M8 8s1.5 2 4 2 4-2 4-2"></path><path d="M9 14h6"></path><path d="M12 3v1"></path><path d="M21 12h-1"></path><path d="M12 21v-1"></path><path d="M3 12h1"></path></svg>
);
const PlusCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
);

// --- 1. PLACEHOLDER DATA ---
const initialRecipeData = [
  {
    id: '1',
    name: 'Spicy Peanut Noodles',
    description: 'A quick and vibrant meal with a creamy, spicy peanut sauce. Perfect for a weeknight dinner.',
    imageUrl: 'https://placehold.co/600x400/FF5733/FFFFFF?text=Spicy+Peanut',
    prepTime: '20 minutes',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '8 oz noodles (spaghetti or ramen)',
      '1/4 cup peanut butter',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp honey or maple syrup',
      '1 tsp chili garlic sauce (or to taste)',
      '1/4 cup hot water',
      'Chopped scallions and peanuts for garnish'
    ],
    instructions: [
      'Cook noodles according to package directions.',
      'In a large bowl, whisk together peanut butter, soy sauce, sesame oil, honey, and chili garlic sauce.',
      'Add hot water gradually until the sauce is smooth and creamy.',
      'Drain noodles and toss immediately with the peanut sauce.',
      'Serve topped with chopped scallions and peanuts.'
    ]
  },
  {
    id: '2',
    name: 'Classic Chicken Pot Pie',
    description: 'A comforting, creamy filling of chicken and vegetables, topped with a flaky, golden crust.',
    imageUrl: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Chicken+Pot+Pie',
    prepTime: '90 minutes',
    servings: '6',
    difficulty: 'Medium',
    ingredients: [
      '1 pre-made pie crust (or homemade)',
      '1.5 lbs chicken breast, cooked and shredded',
      '1 cup mixed frozen vegetables',
      '1 can (10.5 oz) cream of chicken soup',
      '1/2 cup milk',
      '1/2 tsp black pepper'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Combine soup, milk, chicken, vegetables, and pepper in a bowl.',
      'Pour mixture into pie crust.',
      'Top with second crust, crimping the edges.',
      'Bake for 30-35 minutes or until golden brown.'
    ]
  }
];

// --- 2. RECIPE LISTING COMPONENT (HomePage) ---
function HomePage({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-lg mt-10 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Recipes Found</h2>
        <p className="text-gray-500">
          It looks like the kitchen is empty! Try adding a new recipe to get started.
        </p>
        <Link to="/add" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
          <PlusCircleIcon className="inline w-4 h-4 mr-2" /> Add Your First Recipe
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Explore Delicious Recipes</h2>
      
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer h-full flex flex-col">
              
              {/* Recipe Image (Placeholder) */}
              <div className="relative h-48 w-full">
                <img
                  src={recipe.imageUrl || `https://placehold.co/600x400/1D4ED8/FFFFFF?text=${encodeURIComponent(recipe.name.substring(0, 15))}`}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = `https://placehold.co/600x400/9CA3AF/FFFFFF?text=Recipe+Image`; 
                  }}
                />
              </div>

              {/* Recipe Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 truncate" title={recipe.name}>
                    {recipe.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {recipe.description || 'A brief description of this delicious recipe.'}
                  </p>
                </div>
                
                {/* Metadata tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {recipe.prepTime || '30m'} Prep
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${
                      recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                      recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {recipe.difficulty || 'Medium'}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- 3. RECIPE DETAIL COMPONENT ---
function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // Find the recipe directly from props
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6">
            The recipe you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
          >
            Go Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  // Helper function to render list items
  const renderList = (title, items) => (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h3>
      <ul className="space-y-3 list-none p-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-lg text-gray-600">
            <span className="text-indigo-500 mr-3 text-xl">&#9679;</span> 
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-2xl shadow-2xl mt-8 mb-12">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-5xl font-extrabold text-gray-900">{recipe.name}</h1>
        <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 transition duration-150 text-sm"
          >
            &larr; Back to List
        </button>
      </div>

      {/* Image and Metadata Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Main Image */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={recipe.imageUrl || `https://placehold.co/1200x800/4F46E5/FFFFFF?text=${encodeURIComponent(recipe.name)}`}
            alt={recipe.name}
            className="w-full h-full object-cover min-h-[300px]"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/1200x800/9CA3AF/FFFFFF?text=Delicious+Meal`;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Metadata Sidebar */}
        <div className="md:col-span-1 space-y-4">
            <p className="text-gray-600 italic text-lg">{recipe.description}</p>
            <div className="p-4 bg-indigo-50 rounded-xl space-y-3 border-l-4 border-indigo-500">
                <div className="flex items-center space-x-3 text-gray-800">
                    <ClockIcon className="text-indigo-600 w-6 h-6" />
                    <span className="font-semibold">Prep & Cook Time:</span>
                    <span className="font-medium text-lg">{recipe.prepTime || '45 minutes'}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-800">
                    <FlameIcon className="text-indigo-600 w-6 h-6" />
                    <span className="font-semibold">Difficulty:</span>
                    <span className={`font-medium text-lg capitalize ${
                      recipe.difficulty === 'Easy' ? 'text-green-600' : 
                      recipe.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>{recipe.difficulty || 'Medium'}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-800">
                    <HeartIcon className="text-indigo-600 w-6 h-6" />
                    <span className="font-semibold">Servings:</span>
                    <span className="font-medium text-lg">{recipe.servings || '4'}</span>
                </div>
            </div>
        </div>
      </div>

      {/* Ingredients and Instructions Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {renderList('Ingredients', recipe.ingredients || ['2 cups of something delicious', '1 pinch of spice'])}
        {renderList('Instructions', recipe.instructions || ['Step 1: Mix well.', 'Step 2: Bake until golden brown.'])}
      </div>
      
    </div>
  );
}

// --- 4. ADD RECIPE FORM COMPONENT ---
function AddRecipeForm({ onNewRecipe }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    prepTime: '',
    servings: '',
    difficulty: 'Easy',
    imageUrl: '',
    ingredientsText: '', // Multi-line text input for ingredients
    instructionsText: '', // Multi-line text input for instructions
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.ingredientsText.trim() || !formData.instructionsText.trim()) {
        // Since we cannot use alert(), this is a fallback for required fields
        console.error("Please fill in the required fields: Name, Ingredients, and Instructions.");
        return;
    }

    // Split multi-line text into arrays, cleaning up empty lines
    const ingredientsArray = formData.ingredientsText.split('\n').map(s => s.trim()).filter(s => s.length > 0);
    const instructionsArray = formData.instructionsText.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    const newRecipe = {
      id: Date.now().toString(), // Simple unique ID
      name: formData.name,
      description: formData.description,
      prepTime: formData.prepTime,
      servings: formData.servings,
      difficulty: formData.difficulty,
      imageUrl: formData.imageUrl,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
    };

    onNewRecipe(newRecipe); // Pass the new recipe up to the App component state
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Submit a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name and Description */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Recipe Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Short Description</label>
          <textarea
            id="description"
            name="description"
            rows="2"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
          ></textarea>
        </div>

        {/* Prep Time, Servings, Difficulty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">Prep & Cook Time</label>
            <input
              type="text"
              id="prepTime"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              placeholder="e.g., 45 minutes"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
            />
          </div>
          <div>
            <label htmlFor="servings" className="block text-sm font-medium text-gray-700">Servings</label>
            <input
              type="text"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              placeholder="e.g., 4"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
            />
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border bg-white"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Link to a photo of the dish"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredientsText" className="block text-sm font-medium text-gray-700">Ingredients (One per line) <span className="text-red-500">*</span></label>
          <textarea
            id="ingredientsText"
            name="ingredientsText"
            rows="5"
            value={formData.ingredientsText}
            onChange={handleChange}
            required
            placeholder="e.g.&#10;1 cup of flour&#10;2 large eggs&#10;1/2 cup milk"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label htmlFor="instructionsText" className="block text-sm font-medium text-gray-700">Instructions (One step per line) <span className="text-red-500">*</span></label>
          <textarea
            id="instructionsText"
            name="instructionsText"
            rows="7"
            value={formData.instructionsText}
            onChange={handleChange}
            required
            placeholder="e.g.&#10;1. Mix dry ingredients.&#10;2. Whisk in wet ingredients.&#10;3. Bake for 20 minutes."
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
          ></textarea>
        </div>
        
        <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-150 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150"
            >
              Save Recipe
            </button>
        </div>

      </form>
    </div>
  );
}


// --- 5. MAIN APPLICATION COMPONENT (App.jsx) ---
export default function App() {
  // Initialize state with the placeholder data
  const [recipes, setRecipes] = useState(initialRecipeData);

  // Function to add a new recipe to the state
  const handleNewRecipe = (newRecipe) => {
    // Add the new recipe to the beginning of the list and ensure it has a unique ID
    setRecipes(prevRecipes => [
      { ...newRecipe, id: newRecipe.id || Date.now().toString() },
      ...prevRecipes
    ]);
  };

  return (
    <Router>
      {/* Load Tailwind CSS: This script ensures Tailwind classes are available for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="min-h-screen bg-gray-100 font-sans">
        
        {/* Header/Navigation */}
        <header className="bg-white shadow-lg sticky top-0 z-10">
          <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-3xl font-extrabold text-indigo-600 hover:text-indigo-800 transition">
              <SoupIcon className="w-8 h-8" />
              <span>The Recipe Book</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150 p-2 rounded-lg">Home</Link>
                </li>
                <li>
                  <Link 
                    to="/add" 
                    className="flex items-center space-x-1 px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition duration-150"
                  >
                    <PlusCircleIcon className="w-4 h-4" />
                    <span>Add Recipe</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* Main Content Routes */}
        <main className="container mx-auto px-4">
          <Routes>
            {/* Route for the Home Page, passing the current recipe data */}
            <Route path="/" element={<HomePage recipes={recipes} />} />
            
            {/* Route for the Recipe Detail Page, passing recipes for lookup */}
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
            
            {/* Route for the Add Recipe Form */}
            <Route 
              path="/add" 
              element={<AddRecipeForm onNewRecipe={handleNewRecipe} />} 
            />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="mt-12 p-4 text-center text-gray-500 text-sm border-t">
          &copy; {new Date().getFullYear()} The Recipe Book. Built with React and Tailwind CSS.
        </footer>
        
      </div>
    </Router>
  );
}