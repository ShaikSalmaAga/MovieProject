// This class maps each genre object in the TMDb API response
public class Genre {
    private int id;       // Genre ID (e.g. 28)
    private String name;  // Genre name (e.g. "Action")

    // Getter and Setter for id
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    // Getter and Setter for name
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
