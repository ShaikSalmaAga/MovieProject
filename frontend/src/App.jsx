// NavBar component
import NavBar from './components/NavBar';

// React Router
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Homepage';
import Favorite from './pages/Favorites';
import Profiles from './pages/Profiles'; // ✅ Correct import

// CSS and context
import './components/css/App.css';
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profiles" element={<Profiles />} /> {/* ✅ Add this line */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
