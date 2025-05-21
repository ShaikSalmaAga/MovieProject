// mport required React tools
import { createContext, useEffect, useContext, useState } from "react";

//Create Context
const MovieContext = createContext();

//Custom hook to use MovieContext
export const useMovieContext = () => useContext(MovieContext);

//Provider component to wrap around your app
export const MovieProvider = ({ children }) => {
  //State to store all favorite movies
  const [favorites, setFavorites] = useState([]);

  //On first load: read from localStorage
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites"); //key should match below
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  //When favorites change: update localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // was "favorite"
  }, [favorites]);

  //Add movie to favorites
  const addToFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  //Remove movie by ID
  const removeFromFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  //Check if movie is already in favorites
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  //All values to share via context
  const value = {
    favorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
