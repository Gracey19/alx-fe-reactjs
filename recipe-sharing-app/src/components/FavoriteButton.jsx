import { useRecipeStore } from './recipeStore';

function FavoriteButton({ recipeId }) {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
}

export default FavoriteButton;

