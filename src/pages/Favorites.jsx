//Import CSS file for styling
import "../components/css/Favorite.css";

//Import context to get favorite movies
import { useMovieContext } from "../contexts/MovieContext";

//Import MovieCard component to show movie cards
import MovieCard from "../components/movieCard";

function Favorite() {
  //Get the favorites array from context (global state)
  const { favorites } = useMovieContext();

  //Check if favorites exist and is not empty
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>

        {/* Show all favorite movies in grid layout */}
        <div className="movies-grid">
          {favorites.map((movie) => (
            //Pass movie to MovieCard and give unique key
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  //If no favorite movies, show empty message
  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorite;
