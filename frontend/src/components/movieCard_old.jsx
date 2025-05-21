// ✅ Import styling for the card
import "./css/MovieCard.css";

// ✅ Import global movie context to manage favorites
import { useMovieContext } from "../contexts/MovieContext";

// ✅ Functional component to render each movie card
function MovieCard({ movie, onClick }) {
  // Extract functions from context
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();

  // Check if the movie is in favorites
  const favorite = isFavorite(movie.id);

  // Extract release year from the release_date
  const year = movie.release_date?.split("-")[0] || "N/A";

  // ✅ Handle favorite button click (❤️ or 🤍)
  function onFavoriteClick(e) {
    e.stopPropagation(); // prevent modal open when clicking heart

    // Toggle favorite status
    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  }

  // ✅ Render movie card
  return (
    <div className="movie-card" onClick={onClick}>
      {/* Poster section with image and heart button */}
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        {/* Optional dark overlay on hover */}
        <div className="movie-overlay" />

        {/* Favorite button on top-right of poster */}
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Movie title and release year */}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

// ✅ Export this backup component (not actively used)
export default MovieCard;
