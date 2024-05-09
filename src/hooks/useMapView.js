import { useEffect } from 'react';
import { Mappedin } from '@mappedin/mappedin-js';

export default function useMapView(container, venue) {
  useEffect(() => {
    if (container && venue) {
      const mapView = new Mappedin.MapView({
        container,
        venue,
        theme: 'default',
      });

      return () => mapView.destroy();
    }
  }, [container, venue]);
}
