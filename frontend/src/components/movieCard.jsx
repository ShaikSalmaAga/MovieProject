import "./css/MovieCard.css";

// Import context to access favorite functions
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  // Destructure context functions and check favorite status
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();

  // Check if current movie is in favorites
  const favorite = isFavorite(movie.id);

  // Handle favorite button click
  function onFavoriteClick(e) {
    e.preventDefault(); // Stop page reload

    // Add or remove movie from favorites
    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {/* Movie poster image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // ✅ Fixed: wrap string with backticks
          alt={movie.title}
        />

        {/* Favorite button - shows ❤️ if favorite, 🤍 if not */}
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`} // ✅ Fixed: added backticks and quotes
          onClick={onFavoriteClick}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="movie-info">
        {/* Show movie title */}
        <h3>{movie.title}</h3>

        {/* Show only release year from full date */}
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
