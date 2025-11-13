import React from 'react';
import { useRecipeStore } from './recipeStore';

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
    />
  );
}

export default SearchBar;

