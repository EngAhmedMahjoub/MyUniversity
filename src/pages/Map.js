// src/pages/Map.js
import React from 'react';
import Layout from '../components/Layout';

const Map = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>خريطة الحرم الجامعي</h1>
      <p>استخدم الخريطة أدناه للتنقل في الحرم الجامعي.</p>
      {/* Placeholder for map integration */}
      <div style={{ height: '500px', backgroundColor: '#eee', textAlign: 'center', lineHeight: '500px' }}>
        [خريطة تفاعلية هنا]
      </div>
    </Layout>
  );
};

export default Map;
