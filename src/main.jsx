// React ka StrictMode import karte hain — development time errors pakadne ke liye
import { StrictMode } from 'react';

// ReactDOM se createRoot import karte hain — React 18 ke liye naya render method
import { createRoot } from 'react-dom/client';

// BrowserRouter import karte hain — routing (page navigation) ke liye
import { BrowserRouter } from 'react-router-dom';

// App component import karte hain — ye aapka main UI component hai
import App from './App';

// Global CSS file import karte hain — yahi pe Tailwind ya custom CSS likha hota hai
import './components/css/index.css';

// HTML page ke root div ko target karte hain — jahan React pura render hota hai
createRoot(document.getElementById('root')).render(
  // StrictMode sirf development mein chalta hai, bugs detect karne mein madad karta hai
  <StrictMode>
    {/* BrowserRouter se hum multiple pages bana sakte hain without refreshing */}
    <BrowserRouter>
      {/* App component sab kuch render karega — pages, navbar, etc. */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
