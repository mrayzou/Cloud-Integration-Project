// src/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128, 
    lng: -74.0060, 
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
