import React, { createContext, useState, useContext } from 'react';

// Create LocationContext
export const LocationContext = createContext();

// LocationProvider component that provides location-related state and functions
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  // Function to update location
  const updateLocation = (latitude, longitude) => {
    setLocation({ latitude, longitude });
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the LocationContext
export const useLocationContext = () => useContext(LocationContext);
