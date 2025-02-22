import React from 'react';

const MapView = () => {
  return (
      <iframe
        src="https://app.mappedin.com/map/66368db3269972f02bf839c6/directions?floor=m_7fbd89a31da73e80&location=s_0a8a17ac9259439a&departure=24.02651374489289%2C38.201534435989466%2Cm_7fbd89a31da73e80"
        style={{ width: '100%', height: '500px', border: 'none' }}
        allowFullScreen sandbox="" allow="camera = 'none'; microphone='none'"
      />
  );
};

export default MapView;
