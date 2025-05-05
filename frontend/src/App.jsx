import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Favorite from './pages/Favorites';
import './components/css/App.css';
import {MovieProvider} from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
