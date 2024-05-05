import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </Router>
  );
}

export default App;
