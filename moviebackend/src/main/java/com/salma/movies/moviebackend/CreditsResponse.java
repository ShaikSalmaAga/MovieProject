import java.util.List;

// This class represents the full response from /credits API call
public class CreditsResponse {
    private List<Cast> cast; // List of cast members

    // Getter and Setter for cast list
    public List<Cast> getCast() { return cast; }
    public void setCast(List<Cast> cast) { this.cast = cast; }
}
