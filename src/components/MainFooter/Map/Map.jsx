import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useMemo } from 'react';
import { Location, LocationAdress, LocationName } from './Map.styled';

export const Map = () => {
  const sizes = { width: '100%', height: '400px' };

  const center = useMemo(
    () => ({
      lat: 49.84037940597361,
      lng: 24.03317568650616,
    }),
    []
  );

  const marker = {
    lat: 49.84024706452136,
    lng: 24.033143712286236,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  return (
    <div style={sizes}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={17}
        >
          <MarkerF position={marker} title="AP Education Center">
            <InfoWindow position={marker}>
              <Location>
                <LocationName>AP Education Center</LocationName>{' '}
                <LocationAdress href="https://goo.gl/maps/AvneSaz3ikRAaKUD6">
                  вул. Братів Рогатинців, 18
                </LocationAdress>
              </Location>
            </InfoWindow>
          </MarkerF>
        </GoogleMap>
      )}
    </div>
  );
};
