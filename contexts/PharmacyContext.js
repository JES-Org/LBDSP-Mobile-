import React, { createContext, useState, useContext } from 'react';
import addisImage from "../assets/images/addis.jpeg";
import kidImage from '../assets/images/kidanemihiret.jpg'; 

// Create the PharmacyContext
export const PharmacyContext = createContext();

// Create the PharmacyProvider component
export const PharmacyProvider = ({ children }) => {
  const [pharmacies, setPharmacies] = useState([
     {
      id: 1,
      name: 'Gelila',
      location: 'Location 1',
      address: '456 Elm St',
      distance: 1.2,
      image: require("../assets/images/gelila.jpeg"),
      drugsAvailable: ['Drug 1', 'Drug 2']
    },
    {
      id: 2,
      name: 'Kidane Mihirete',
      address: '123 Main St',
      distance: 2.5,
      location: 'Location 2',
      image: kidImage,
      drugsAvailable: ['Drug 3', 'Drug 4']
    },
    {
      id: 3,
      name: 'Selam pharmacy',
      address: '123 Main St',
      distance: 2.5,
      drugsAvailable: ['Drug 3', 'Drug 4'],
      image: require("../assets/images/selam.jpeg"),

    },
    {
      id: 4,
      name: 'key meskel',
      address: '456 Elm St',
      distance: 1.2,
      drugsAvailable: ['Drug 3', 'Drug 4'],
      image: require("../assets/images/keymesekel.jpeg"),

    },
    {
      id: 5,
      name: 'addis hiywot pharmacy',
      address: '789 Oak St',
      distance: 3.8,
      drugsAvailable: ['Drug 3', 'Drug 4'],
      image: addisImage,

    },
  ]);

  return (
    <PharmacyContext.Provider value={{ pharmacies, setPharmacies }}>
      {children}
    </PharmacyContext.Provider>
  );
};

// Custom hook to use the PharmacyContext
export const usePharmacyContext = () => useContext(PharmacyContext);
