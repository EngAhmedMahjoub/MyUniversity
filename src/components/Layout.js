import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the footer is at the bottom of the page, regardless of the content size
    backgroundColor: '#fff', // Gives a consistent background color
  };

  const contentStyle = {
    flex: 1, // Takes up all available space, pushing the footer down
    padding: '20px',
    maxWidth: '1200px', // Limits the width of the content for readability on large screens
    margin: '0 auto', // Centers the content horizontally
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '10px 20px', // Consistent padding with the content area
    backgroundColor: '#333', // Dark background for contrast
    color: '#fff', // White text for readability against the dark background
    borderTop: '1px solid #e7e7e7', // Adds a subtle border for visual separation
  };

  return (
    <div style={layoutStyle}>
      <NavBar />
      <div style={contentStyle}>
        {children}
      </div>
      <footer style={footerStyle}>
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
