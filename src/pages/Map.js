import React from 'react';
import Layout from '../components/Layout';
import MapView from '../components/MapView';

const Map = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>خريطة الحرم الجامعي</h1>
        <p style={paragraphStyle}>
          استخدم الخريطة أدناه للتنقل في الحرم الجامعي.
        </p>
        <MapView style={mapStyle} />
      </div>
    </Layout>
  );
};

// CSS Styles
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

const mapStyle = {
  width: '100%', // Ensures the map fills the container
  height: '500px', // Specifies the height of the map for adequate visibility
  border: 'none', // Optional: Removes any default border around the iframe or container
};

export default Map;
