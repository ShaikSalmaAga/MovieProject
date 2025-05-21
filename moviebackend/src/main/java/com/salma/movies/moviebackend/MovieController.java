package com.salma.movies.moviebackend;

// Import required classes
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// This class is a REST API controller
@RestController
@RequestMapping("/api") // URL: localhost:8080/api/movies
@CrossOrigin(origins = "http://localhost:5173") // Allow React app to access this
public class MovieController {

    // Connect this controller to the TmdbService
    @Autowired
    private TmdbService tmdbService;

    // When a GET request is sent to /api/movies, this function will run
    @GetMapping("/movies")
    public List<Movie> getMovies() {
        // Call the service function to fetch movies from TMDb
        return tmdbService.fetchPopularMovies();
    }
} 

