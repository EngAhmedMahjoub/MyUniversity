import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'; // Adjust the relative path as necessary

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust this to space-between to use the available space on both ends
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
  };

  const logoStyle = {
    height: '50px',
    order: 1,
  };

  const linkContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    order: 2,
  };

  const linkStyle = {
    margin: '0 20px', // Increase margin for better visual separation
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      <img src={logo} style={logoStyle} alt="logo"/>
      <div style={linkContainer}>
        <Link to="/" style={linkStyle}>الرئيسية</Link>
        <Link to="/map" style={linkStyle}>الخريطة</Link>
        <Link to="/about-us" style={linkStyle}>من نحن</Link>
      </div>
    </nav>
  );
};

export default NavBar;
