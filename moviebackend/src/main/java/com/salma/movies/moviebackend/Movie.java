// This line tells Java which package this file belongs to
package com.salma.movies.moviebackend;

import java.util.List;

// This class represents a single movie object
public class Movie {

    // Unique ID of the movie
    private int id;

    // Title or name of the movie
    private String title;

    // Release date (like "2024-01-01")
    private String release_date;

    // Poster image path
    private String poster_path;

    // Duration of the movie (like "1h 54m")
    private String duration;

    // Rating (like "PG", "U/A")
    private String rating;

    // Short description of the movie
    private String description;

    // Genres (like Drama, Comedy)
    private List<String> genres;

    // List of actors
    private List<String> cast;

    // Empty constructor (needed for Spring to create objects)
    public Movie() {}

    // ✅ Getter and Setter for ID
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    // ✅ Getter and Setter for Title
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    // ✅ Getter and Setter for Release Date
    public String getRelease_date() { return release_date; }
    public void setRelease_date(String release_date) { this.release_date = release_date; }

    // ✅ Getter and Setter for Poster Path
    public String getPoster_path() { return poster_path; }
    public void setPoster_path(String poster_path) { this.poster_path = poster_path; }

    // ✅ Getter and Setter for Duration
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    // ✅ Getter and Setter for Rating
    public String getRating() { return rating; }
    public void setRating(String rating) { this.rating = rating; }

    // ✅ Getter and Setter for Description
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    // ✅ Getter and Setter for Genres
    public List<String> getGenres() { return genres; }
    public void setGenres(List<String> genres) { this.genres = genres; }

    // ✅ Getter and Setter for Cast
    public List<String> getCast() { return cast; }
    public void setCast(List<String> cast) { this.cast = cast; }
}
