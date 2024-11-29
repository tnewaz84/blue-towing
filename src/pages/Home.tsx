import React, { useState } from 'react';
import { Map } from '../components/Map';
import { RequestForm } from '../components/RequestForm';
import type { TowRequest } from '../types';

export function Home() {
  const [pickup, setPickup] = useState<google.maps.LatLngLiteral>();
  
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setPickup({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
  };

  const handleSubmit = (request: TowRequest) => {
    // Here you would typically send the request to your backend
    console.log('Tow request:', request);
    alert('Tow request received! We will contact you shortly.');
  };

  const denverCenter = { lat: 39.7392, lng: -104.9903 };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">24/7 Emergency Towing Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Request a Tow</h2>
            <p className="text-gray-600 mb-6">
              Click on the map to set your pickup location, then fill out the form below.
            </p>
            
            <Map
              center={denverCenter}
              markers={pickup ? [pickup] : []}
              onMapClick={handleMapClick}
            />
            
            <div className="mt-6">
              <RequestForm onSubmit={handleSubmit} pickup={pickup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}