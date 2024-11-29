import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../config/constants';

interface MapProps {
  center: google.maps.LatLngLiteral;
  markers?: google.maps.LatLngLiteral[];
  onMapClick?: (e: google.maps.MapMouseEvent) => void;
}

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

export function Map({ center, markers = [], onMapClick }: MapProps) {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onClick={onMapClick}
      >
        {markers.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}