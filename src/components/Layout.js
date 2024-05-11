import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9', 
    };

  const contentStyle = {
    flex: 1,
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    borderTop: '1px solid #e7e7e7',
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
