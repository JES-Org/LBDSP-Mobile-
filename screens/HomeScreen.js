import React, { useEffect, useState, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { PharmacyContext } from "../contexts/PharmacyContext"; // Adjust path as needed
import { LocationContext } from "../contexts/LocationContext"; // Adjust path as needed
import { Ionicons } from "@expo/vector-icons";
import PharmacyCard from "../components/PharmacyCard";
import styles from "../styles/styles"; // Import the new styles

const HomeScreen = () => {
  const [pharmacySearch, setPharmacySearch] = useState("");
  const [medicationSearch, setMedicationSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { pharmacies, setPharmacies } = useContext(PharmacyContext);
  const [filteredPharmacies, setFilteredPharmacies] = useState(pharmacies);

  const { updateLocation } = useContext(LocationContext);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      updateLocation(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const handlePharmacySearch = () => {
    const filtered = pharmacies.filter((pharmacy) =>
      pharmacy.name.toLowerCase().includes(pharmacySearch.toLowerCase())
    );
    setFilteredPharmacies(filtered);
  };

  const handleMedicationSearch = () => {
    // Placeholder for medication search logic
    alert("Search for medication: " + medicationSearch);
  };

  const goToPharmacyDetails = (pharmacy) => {
    navigation.navigate("PharmacyDetails", { pharmacy });
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
  <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <Text style={styles.headerTitle}>Pharmacy Finder</Text>
      </View>

      {/* Error Message */}
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      {/* Search Fields */}
      <ImageBackground
        source={require("../assets/images/logo.jpeg")}
        style={styles.searchBackground}
          imageStyle={styles.searchBackgroundImage}
          resizeMode="cover"
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by pharmacy name"
            value={pharmacySearch}
            onChangeText={setPharmacySearch}
          />
          <Ionicons
            name="search"
            size={24}
            color="black"
            onPress={handlePharmacySearch}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by medication name"
            value={medicationSearch}
            onChangeText={setMedicationSearch}
          />
          <Ionicons
            name="search"
            size={24}
            color="black"
            onPress={handleMedicationSearch}
          />
        </View>
      </ImageBackground>

      {/* Scrollable content */}
      <View style={styles.pharmaciesContainer}>
        <Text style={styles.sectionTitle}>Nearby Pharmacies in Bahir Dar</Text>
        <FlatList
          data={filteredPharmacies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PharmacyCard
              pharmacy={item}
              onPress={() => goToPharmacyDetails(item)}
            />
          )}
        />
      </View>
      </ScrollView>
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
      </KeyboardAvoidingView>

  );
};

export default HomeScreen;
