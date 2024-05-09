import React from 'react';
import Layout from '../components/Layout';
import MapView from '../components/MapView';

const Map = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>خريطة الحرم الجامعي</h1>
      <p>استخدم الخريطة أدناه للتنقل في الحرم الجامعي.</p>
      <MapView></MapView>
    </Layout>
  );
};

export default Map;
