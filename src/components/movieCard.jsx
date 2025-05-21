import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie, onClick }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const year = movie.release_date?.split("-")[0] || "N/A";

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // prevent modal from opening
    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        width: 200,
        m: 2,
        cursor: "pointer",
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          height="300"
        />
        <IconButton
          onClick={handleFavoriteClick}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          {favorite ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon color="action" />
          )}
        </IconButton>
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
