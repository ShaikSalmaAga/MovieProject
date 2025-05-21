import React from "react";
import { Link } from "react-router-dom";

// Import the CSS file for styling the NavBar layout and look
import "./css/NavBar.css"; // ✅ Ensure filename is exactly NavBar.css

// Define the NavBar component
function NavBar() {
  // Return the JSX for the navigation bar
  return (
    <nav className="navbar">

      {/* Left side — logo or brand name */}
      <div className="navbar-brand">
        {/* ✅ Updated: Link to profiles page instead of homepage */}
        <Link to="/profiles">Movie App</Link>
      </div>

      {/* Right side — nav links */}
      <div className="navbar-links">
        {/* Link to Home page */}
        <Link to="/">Home</Link>

        {/* Link to Favorites page */}
        <Link to="/favorite">Favorites</Link>
      </div>

    </nav>
  );
}

// Export the NavBar component so it can be used in App.jsx
export default NavBar;
