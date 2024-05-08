// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ margin: '20px' }}>
        {children}
      </div>
      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
