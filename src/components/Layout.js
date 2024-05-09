import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure footer sticks to bottom of the page
  };

  const contentStyle = {
    flex: 1, // Fill remaining vertical space
    padding: '20px',
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
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
