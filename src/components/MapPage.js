// MapPage.js
import React, { useRef } from 'react';
import useVenue from './useVenue';
import useMapView from './useMapView';

const options = {
  venue: 'your-venue-id',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
};

export default function MapPage() {
  const mapRef = useRef(null);
  const { venue, error } = useVenue(options);

  useMapView(mapRef.current, venue);

  if (error) {
    return <div>Error loading venue: {error.message}</div>;
  }

  if (!venue) {
    return <div>Loading...</div>;
  }

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
}
