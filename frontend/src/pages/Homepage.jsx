//Import MovieCard component to show each movie
import MovieCard from "../components/movieCard";

//Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Import CSS file for styling
import "../components/css/Home.css";

// Import API functions
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  // Define state variables
  const [searchQuery, setSearchQuery] = useState(""); // for search input
  const [movies, setMovies] = useState([]);           // list of movies
  const [error, setError] = useState(null);           // if error happens
  const [loading, setLoading] = useState(true);       // to show loading message

  //Load popular movies when page first loads
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();  // call API
        setMovies(popularMovies);                        // set movies to display
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);  // stop loading message
      }
    };

    loadPopularMovies(); // run the function
  }, []); // empty dependency → run only once when component mounts

  //Handle form submit (when user searches)
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page reload

    if (!searchQuery.trim()) return; // if input is empty, stop
    if (loading) return;             // if already loading, stop

    setLoading(true); // show loading

    try {
      const searchResults = await searchMovies(searchQuery); // call API with search
      setMovies(searchResults);        // update movie list
      setError(null);                  // clear previous error
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false); // hide loading after search
    }
  };

  //Conditional rendering: show loading or error
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      {/*Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // update searchQuery state
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Show Movies */}
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title
              .toLowerCase()
              .startsWith(searchQuery.toLowerCase()) && ( // filter movies by title
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
