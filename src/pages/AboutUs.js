import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>من نحن</h1>
        <p style={paragraphStyle}>
          نسعى جاهدين لتسهيل العثور على المرافق بلمح الجامعة البصر وبكل يسر وسهولة!
        </p>
      </div>
    </Layout>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#0056b3',
  marginBottom: '1rem',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
};

export default AboutUs;
