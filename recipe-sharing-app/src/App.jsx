import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
           <div style={{ padding: '40px' }}>
             <h1>Recipe Sharing App</h1>
             <AddRecipeForm />
             <SearchBar />
             <RecipeList />
           </div>
         }
       />
       <Route path="/recipe/:id" element={<RecipeDetails />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App;