import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const PharmacyDetails = ({ route, navigation }) => {
  const { pharmacy } = route.params;
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const toggleDrugSelection = (drug) => {
    setSelectedDrugs((prev) =>
      prev.includes(drug) ? prev.filter((item) => item !== drug) : [...prev, drug]
    );
  };

  const handleContact = () => {
    Alert.alert(
      `Contact ${pharmacy.name}`,
      `Call or visit us at ${pharmacy.address}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('Contact button pressed') },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={pharmacy.image} style={styles.image} />
      <Text style={styles.name}>{pharmacy.name}</Text>
      <Text style={styles.address}>Address: {pharmacy.address}</Text>
      <Text style={styles.location}>Location: {pharmacy.location || 'N/A'}</Text>
      <Text style={styles.distance}>Distance: {pharmacy.distance} km</Text>
      
      <Text style={styles.title}>Drugs Available:</Text>
      {pharmacy.drugsAvailable.map((drug, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.drugItem,
            selectedDrugs.includes(drug) && styles.selectedDrug,
          ]}
          onPress={() => toggleDrugSelection(drug)}
        >
          <Text style={styles.drugText}>{drug}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleContact}>
        <Text style={styles.buttonText}>Contact Pharmacy</Text>
      </TouchableOpacity>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  distance: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  drugItem: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  selectedDrug: {
    backgroundColor: '#c8e6c9',
    borderColor: '#4caf50',
  },
  drugText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PharmacyDetails;
