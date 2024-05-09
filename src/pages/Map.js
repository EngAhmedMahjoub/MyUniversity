import React from 'react';
import Layout from '../components/Layout';
import MapPage from '../components/MapPage';

const Map = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>خريطة الحرم الجامعي</h1>
      <p>استخدم الخريطة أدناه للتنقل في الحرم الجامعي.</p>
      <MapPage></MapPage>
    </Layout>
  );
};

export default Map;
