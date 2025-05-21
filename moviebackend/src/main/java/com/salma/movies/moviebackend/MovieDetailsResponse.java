import java.util.List;

// This class maps the response from /movie/{id} API
public class MovieDetailsResponse {
    private int runtime;               // Duration in minutes
    private List<Genre> genres;       // List of genres

    // Getter and Setter for runtime
    public int getRuntime() { return runtime; }
    public void setRuntime(int runtime) { this.runtime = runtime; }

    // Getter and Setter for genres
    public List<Genre> getGenres() { return genres; }
    public void setGenres(List<Genre> genres) { this.genres = genres; }

    // TMDb doesn't give direct rating here, so we return default
    public String getRating() {
        return "PG";
    }
}
