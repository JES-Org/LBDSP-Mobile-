import React, { createContext, useState, useContext, useEffect } from 'react';
import { Asset } from 'expo-asset';

const addisImage = require('../assets/images/addis.jpeg');
const geliImage = require('../assets/images/gelila.jpeg');
const kidImage = require('../assets/images/kidanemihiret.jpg');
const keymwsikelImage = require('../assets/images/keymesekel.jpeg');
const selamImage = require('../assets/images/selam.jpeg');

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
      image: geliImage,
      drugsAvailable: ['Paracetamol', 'Ibuprofen']
    },
    {
      id: 2,
      name: 'Kidane Mihiret',
      address: '123 Main St',
      distance: 2.5,
      location: 'Location 2',
      image: kidImage,
      drugsAvailable: ['Amoxicillin', 'Aspirin']
    },
    {
      id: 3,
      name: 'Selam pharmacy',
      address: '123 Main St',
      distance: 2.5,
      drugsAvailable: ['Cetirizine', 'Metformin'],
      image: selamImage
    },
    {
      id: 4,
      name: 'Key Meskel',
      address: '456 Elm St',
      distance: 1.2,
      drugsAvailable: ['Omeprazole', 'Losartan'],
      image: keymwsikelImage
    },
    {
      id: 5,
      name: 'Addis Hiywot Pharmacy',
      address: '789 Oak St',
      distance: 3.8,
      drugsAvailable: ['Ciprofloxacin', 'Azithromycin'],
      image: addisImage
    },
  ]);

  // Simulate real-time drug updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPharmacies(prevPharmacies =>
        prevPharmacies.map(pharmacy => ({
          ...pharmacy,
          drugsAvailable: updateDrugs(pharmacy.drugsAvailable)
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to update drugs
  const updateDrugs = (currentDrugs) => {
    const allDrugs = [
      'Paracetamol',
      'Ibuprofen',
      'Amoxicillin',
      'Aspirin',
      'Cetirizine',
      'Metformin',
      'Omeprazole',
      'Losartan',
      'Ciprofloxacin',
      'Azithromycin'
    ];
    const randomDrug = allDrugs[Math.floor(Math.random() * allDrugs.length)];

    // Add or remove a random drug for variability
    if (currentDrugs.includes(randomDrug)) {
      return currentDrugs.filter(drug => drug !== randomDrug);
    } else {
      return [...currentDrugs, randomDrug];
    }
  };

  return (
    <PharmacyContext.Provider value={{ pharmacies, setPharmacies }}>
      {children}
    </PharmacyContext.Provider>
  );
};

// Custom hook to use the PharmacyContext
export const usePharmacyContext = () => useContext(PharmacyContext);
