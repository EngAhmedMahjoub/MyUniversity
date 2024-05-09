import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#333',
    direction: 'rtl', // Ensuring that layout follows RTL
  };

  const linkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px',
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  const activeLinkStyle = {
    backgroundColor: '#555', // Change background color for active link
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>الرئيسية</Link>
      <Link to="/map" style={linkStyle} activeStyle={activeLinkStyle}>الخريطة</Link>
      <Link to="/about-us" style={linkStyle} activeStyle={activeLinkStyle}>من نحن</Link>
    </nav>
  );
};

export default NavBar;
