import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { PharmacyContext } from '../contexts/PharmacyContext'; // Adjust path as needed
import { LocationContext } from '../contexts/LocationContext'; // Adjust path as needed
import { Ionicons } from '@expo/vector-icons';
import PharmacyCard from '../components/PharmacyCard';

const HomeScreen = () => {

  const [pharmacySearch, setPharmacySearch] = useState('');
  const [medicationSearch, setMedicationSearch] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const { pharmacies, setPharmacies } = useContext(PharmacyContext);
  const [filteredPharmacies, setFilteredPharmacies] = useState(pharmacies);

  const { updateLocation } = useContext(LocationContext);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      updateLocation(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const handlePharmacySearch = () => {
    const filtered = pharmacies.filter(pharmacy =>
      pharmacy.name.toLowerCase().includes(pharmacySearch.toLowerCase())
    );
    setFilteredPharmacies(filtered);
  };

  const handleMedicationSearch = () => {
    // Placeholder for medication search logic
    alert('Search for medication: ' + medicationSearch);
  };

  const goToPharmacyDetails = (pharmacy) => {
    navigation.navigate('PharmacyDetails', { pharmacy });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <Text style={styles.headerTitle}>Pharmacy Finder</Text>
      </View>

      {/* Error Message */}
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      {/* Search Fields */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by pharmacy name"
          value={pharmacySearch}
          onChangeText={setPharmacySearch}
        />
        <Ionicons name="search" size={24} color="black" onPress={handlePharmacySearch} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by medication name"
          value={medicationSearch}
          onChangeText={setMedicationSearch}
        />
        <Ionicons name="search" size={24} color="black" onPress={handleMedicationSearch} />
      </View>

      {/* Scrollable content */}
        <View style={styles.pharmaciesContainer}>
          <Text style={styles.sectionTitle}>Nearby Pharmacies</Text>
          <FlatList
            data={pharmacies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PharmacyCard pharmacy={item} onPress={() => goToPharmacyDetails(item)} />
            )}
          />
        </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="heart" size={24} color="black" />
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="person" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="help-circle" size={24} color="black" />
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  pharmaciesContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  footerItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
