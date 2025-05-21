// This line tells Java which folder/package this file belongs to
package com.salma.movies.moviebackend;

// Import List to hold multiple Movie objects
import java.util.List;

// This class is used to match the structure of TMDb API response
public class TMDbResponse {

    // TMDb API sends a field called "results" which contains a list of movies
    private List<Movie> results;

    // Getter method: helps to read the value of "results"
    public List<Movie> getResults() {
        return results;
    }

    // Setter method: helps to set or update the value of "results"
    public void setResults(List<Movie> results) {
        this.results = results;
    }
}
