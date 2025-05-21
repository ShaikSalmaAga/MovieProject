package com.salma.movies.moviebackend;

// ✅ Import all required packages
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

// ✅ Annotate this class as a Spring Boot Service
@Service
public class TmdbService {

    // ✅ Read TMDb API key from application.properties
    @Value("${tmdb.api.key}")
    private String apiKey;

    // ✅ Base TMDb API URL
    private final String TMDB_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";

    // ✅ Main method to fetch popular movies
    public List<Movie> fetchPopularMovies() {
        RestTemplate restTemplate = new RestTemplate(); // Used to call TMDb API

        TMDbResponse response = restTemplate.getForObject(TMDB_URL + apiKey, TMDbResponse.class);
        List<Movie> movies = response.getResults(); // Basic movie list

        // ✅ Enrich each movie with full details and cast
        for (Movie m : movies) {
            try {
                // 🔸 1. Call /movie/{id} to get duration + genres
                String detailsUrl = UriComponentsBuilder
                        .fromHttpUrl("https://api.themoviedb.org/3/movie/" + m.getId())
                        .queryParam("api_key", apiKey)
                        .toUriString();

                MovieDetailsResponse details = restTemplate.getForObject(detailsUrl, MovieDetailsResponse.class);

                int runtime = details.getRuntime(); // Get runtime in minutes
                String duration = runtime > 0 ? (runtime / 60) + "h " + (runtime % 60) + "m" : "N/A";
                m.setDuration(duration); // Set duration like "2h 30m"

                m.setRating(details.getRating()); // Set default rating (PG)

                // Convert Genre objects to List<String>
                m.setGenres(details.getGenres().stream()
                        .map(Genre::getName)
                        .collect(Collectors.toList()));

                // 🔸 2. Call /credits to get top 5 cast members
                String creditsUrl = UriComponentsBuilder
                        .fromHttpUrl("https://api.themoviedb.org/3/movie/" + m.getId() + "/credits")
                        .queryParam("api_key", apiKey)
                        .toUriString();

                CreditsResponse credits = restTemplate.getForObject(creditsUrl, CreditsResponse.class);

                List<String> cast = credits.getCast().stream()
                        .limit(5) // Only top 5 actors
                        .map(Cast::getName)
                        .collect(Collectors.toList());

                m.setCast(cast); // Set cast list in movie

            } catch (Exception ex) {
                System.out.println("❌ Failed to fetch full details for movie ID: " + m.getId());
                ex.printStackTrace();
            }
        }

        return movies;
    }
}
