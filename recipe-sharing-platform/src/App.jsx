// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail'; // Imports the component we are creating next

function App() {
  return (
    // Uses <Router> exactly as specified in the prompt
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the Recipe Detail Page, using the ID parameter */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

