import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage.jsx'; // Path adjusted to '../components/'
import RecipeDetail from '../components/RecipeDetail.jsx'; // Path adjusted
import AddRecipeForm from '../components/AddRecipeForm.jsx'; // Path adjusted
import initialRecipeData from '../data.json'; // Path adjusted to '../data.json'

function App() {
  // We lift the state up to App.jsx to allow AddRecipeForm to modify the list
  const [recipes, setRecipes] = useState(initialRecipeData);

  // Function to add a new recipe to the state
  const handleNewRecipe = (newRecipe) => {
    // Add the new recipe to the beginning of the list
    setRecipes(prevRecipes => [
      newRecipe,
      ...prevRecipes
    ]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md p-4 mb-8">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">Recipe Platform</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
                </li>
                <li>
                  {/* Link to the new Add Recipe route */}
                  <a href="/add" className="text-gray-600 hover:text-blue-600 font-medium">Add Recipe</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <Routes>
          {/* Route for the Home Page, passing the current recipe data */}
          <Route path="/" element={<HomePage recipes={recipes} />} />
          
          {/* Route for the Recipe Detail Page, using the ID parameter */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          
          {/* NEW ROUTE for the Add Recipe Form */}
          <Route 
            path="/add" 
            element={<AddRecipeForm onNewRecipe={handleNewRecipe} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

