// ✅ Import React hooks
import { useState, useEffect } from "react";

// ✅ Import CSS
import "../components/css/Home.css";

// ✅ Import components
import MovieCard from "../components/movieCard";
import MovieDetails from "../components/MovieDetails";

// ✅ Import API service to get movies
import { getPopularMovies } from "../services/api";

// 🎬 Main Home component
function Home() {
  // 🔍 Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // 🎞️ Movie list from backend
  const [movies, setMovies] = useState([]);

  // ⚠️ Error state for failed API
  const [error, setError] = useState(null);

  // ⏳ Loading state
  const [loading, setLoading] = useState(true);

  // 🎯 Selected movie (for modal)
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 📡 Fetch movies on first load
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log("Fetched movies:", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // ⏳ Loading state
  if (loading) return <p>Loading movies...</p>;

  // ❌ Error message
  if (error) return <p>{error}</p>;

  // ❗ No results
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  // ✅ Main UI rendering
  return (
    <div className="home">
      {/* 🔍 Search input */}
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {/* 🎞️ Movie cards grid */}
      <div className="movies-grid">
        {movies
          .filter((movie) => movie.title) // ensure title exists
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)} // ✅ open modal on click
            />
          ))}
      </div>

      {/* 💬 Movie details modal */}
      {selectedMovie && (
        <MovieDetails
          movie={{
            ...selectedMovie,
            year: selectedMovie.release_date?.split("-")[0], // extract year
          }}
          onClose={() => setSelectedMovie(null)} // ❌ close handler
        />
      )}
    </div>
  );
}

// ✅ Export component for use in App
export default Home;
