// This function will call your Spring Boot backend API
// React will NOT call TMDb directly — backend will handle it securely

export const getPopularMovies = async () => {
    // Call Spring Boot API at: http://localhost:8080/api/movies
    const response = await fetch("http://localhost:8080/api/movies");
  
    // Convert the response into JSON format
    const data = await response.json();
  
    // Return the movie list from the response
    return data;
  };

/*
I used this code, before backend
const API_KEY = "83bc4fc600512b2913009b2ec8c64c51";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
};

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}; */