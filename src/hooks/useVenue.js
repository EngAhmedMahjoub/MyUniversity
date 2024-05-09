import { useState, useEffect } from 'react';
import { Mappedin } from '@mappedin/mappedin-js';

export default function useVenue(options) {
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mappedin = new Mappedin(options);

    mappedin.getVenue(options.venue)
      .then(venueData => {
        setVenue(venueData);
      })
      .catch(err => {
        setError(err);
      });
  }, [options]);

  return { venue, error };
}
