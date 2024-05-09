import React from 'react';
import Layout from '../components/Layout';

const Map = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>خريطة الحرم الجامعي</h1>
      <p>استخدم الخريطة أدناه للتنقل في الحرم الجامعي.</p>
      <iframe
        src="https://app.mappedin.com/map/66368db3269972f02bf839c6/directions?floor=m_7fbd89a31da73e80&location=s_0a8a17ac9259439a&departure=24.02651374489289%2C38.201534435989466%2Cm_7fbd89a31da73e80"
        style={{ width: '100%', height: '500px', border: 'none' }}
        allowFullScreen
      />
    </Layout>
  );
};

export default Map;
