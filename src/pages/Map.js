import React from 'react';
import Layout from '../components/Layout';
import MapView from '../components/MapView';

const Map = () => {
  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>خريطة الحرم الجامعي</h1>
        <p style={paragraphStyle}>
          استخدم الخريطة أدناها للتنقل في الحرم الجامعي.
        </p>
        <MapView style={mapStyle} />
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

const mapStyle = {
  width: '100%',
  height: '500px',
  border: 'none',
};

export default Map;
