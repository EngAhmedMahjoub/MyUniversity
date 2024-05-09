import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>الصفحة الرئيسية</h1>
        <p style={paragraphStyle}>
          مرحبًا بكم في موقع جامعة الينبع. هنا ستجد كل ما تحتاج لمعرفته حول الحرم الجامعي.
        </p>
      </div>
    </Layout>
  );
};

// Enhanced CSS Styles
const containerStyle = {
  textAlign: 'center',
  padding: '20px', // Uniform padding for better spacing
  maxWidth: '800px', // Maximum width for better readability on large screens
  margin: 'auto', // Automatically center the container on the page
};

const headingStyle = {
  fontSize: '2.5rem', // Responsive font size
  color: '#0056b3', // A pleasant blue that fits many professional themes
  marginBottom: '1rem', // Space below the heading
};

const paragraphStyle = {
  fontSize: '1.2rem', // Slightly larger paragraph text for readability
  lineHeight: '1.6', // Line height for better text flow
};

export default Home;
