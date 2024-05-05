// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center', // Center items
    padding: '10px',
    backgroundColor: '#f0f0f0',
    direction: 'rtl' // Ensuring that layout follows RTL
  };

  const linkStyle = {
    margin: '0 10px', // This should work well for both LTR and RTL
    textAlign: 'center' // Center-align the text within links
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>الرئيسية</Link>
      <Link to="/map" style={linkStyle}>الخريطة</Link>
      <Link to="/about-us" style={linkStyle}>معلومات عنا</Link>
    </nav>
  );
};

export default NavBar;
