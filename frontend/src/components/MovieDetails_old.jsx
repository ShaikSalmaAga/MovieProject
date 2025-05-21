// ✅ Import React (needed for JSX)
import React from "react";

// ✅ Import CSS for modal styling
import "./css/MovieDetails.css";

// ✅ Functional component to show detailed movie info
const MovieDetails = ({ movie, onClose }) => {
  return (
    // 🔲 Background overlay
    <div className="modal-overlay">
      
      {/* 🗂️ Modal content box */}
      <div className="modal-content">

        {/* ❌ Close button */}
        <button className="close-button" onClick={onClose}>
          ❌ Close
        </button>

        {/* 🎬 Movie title and year */}
        <h2 className="modal-title">
          {movie.title} ({movie.year || "N/A"})
        </h2>

        {/* ⏱️ Duration */}
        <div className="modal-info">
          <strong>Duration:</strong>{" "}
          <span>{movie.duration || "1h 54m"}</span>
        </div>

        {/* ⭐ Rating */}
        <div className="modal-info">
          <strong>Rating:</strong>{" "}
          <span>{movie.rating || "PG-13"}</span>
        </div>

        {/* 📖 Description */}
        <div className="modal-info">
          <strong>Description:</strong>{" "}
          <span>{movie.description || "No description available."}</span>
        </div>

        {/* 🧩 Genres */}
        <div className="modal-info">
          <strong>Genres:</strong>{" "}
          <span>
            {movie.genres?.length > 0 ? movie.genres.join(", ") : "Action, Drama"}
          </span>
        </div>

        {/* 🎭 Cast */}
        <div className="modal-info">
          <strong>Cast:</strong>{" "}
          <span>
            {movie.cast?.length > 0 ? movie.cast.join(", ") : "Not Available"}
          </span>
        </div>
      </div>
    </div>
  );
};

// ✅ Export component to be used in Home.jsx
export default MovieDetails;
