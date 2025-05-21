import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ✅ Modal styling
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  outline: "none",
};

const MovieDetails = ({ movie, onClose }) => {
  return (
    <Modal open={!!movie} onClose={onClose}>
      <Box sx={modalStyle}>
        {/* ❌ Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* 🎬 Title + Year */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {movie.title} ({movie.year || "N/A"})
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1}>
          <Typography>
            <strong>Duration:</strong> {movie.duration || "1h 54m"}
          </Typography>

          <Typography>
            <strong>Rating:</strong> {movie.rating || "PG-13"}
          </Typography>

          <Typography>
            <strong>Description:</strong>{" "}
            {movie.description || "No description available."}
          </Typography>

          <Typography>
            <strong>Genres:</strong>{" "}
            {movie.genres?.length > 0
              ? movie.genres.join(", ")
              : "Action, Drama"}
          </Typography>

          <Typography>
            <strong>Cast:</strong>{" "}
            {movie.cast?.length > 0
              ? movie.cast.join(", ")
              : "Not Available"}
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default MovieDetails;
