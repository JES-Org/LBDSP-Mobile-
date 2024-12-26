import React, { createContext, useState, useContext } from 'react';

// Create the PharmacyContext
export const PharmacyContext = createContext();

// Create the PharmacyProvider component
export const PharmacyProvider = ({ children }) => {
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: 'Pharmacy 1', location: 'Location 1', drugsAvailable: ['Drug 1', 'Drug 2'] },
    { id: 2, name: 'Pharmacy 2', location: 'Location 2', drugsAvailable: ['Drug 3', 'Drug 4'] },
  ]);

  return (
    <PharmacyContext.Provider value={{ pharmacies, setPharmacies }}>
      {children}
    </PharmacyContext.Provider>
  );
};

// Custom hook to use the PharmacyContext
export const usePharmacyContext = () => useContext(PharmacyContext);
