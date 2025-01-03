import React, { useEffect, useState, useContext } from "react";
import {
  View,
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
import { PharmacyContext } from "../contexts/PharmacyContext"; 
import { LocationContext } from "../contexts/LocationContext"; 
import { Ionicons } from "@expo/vector-icons";
import PharmacyCard from "../components/PharmacyCard";
import styles from "../styles/styles"; 

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { pharmacies } = useContext(PharmacyContext);
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

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = pharmacies.filter(
      (pharmacy) =>
        pharmacy.name.toLowerCase().includes(query) ||
        pharmacy.drugsAvailable.some((drug) =>
          drug.toLowerCase().includes(query)
        )
    );
    setFilteredPharmacies(filtered);
  };

  const goToPharmacyDetails = (pharmacy) => {
    navigation.navigate("PharmacyDetails", { pharmacy });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <>
              <View style={styles.header}>
                <Ionicons name="menu" size={28} color="black" />
                <Text style={styles.headerTitle}>Pharmacy Finder</Text>
              </View>
              {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

              <ImageBackground
                source={require("../assets/images/logo.jpeg")}
                style={styles.searchBackground}
                imageStyle={styles.searchBackgroundImage}
              >
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search by pharmacy or drug name"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                  />
                  <Ionicons
                    name="search"
                    size={24}
                    color="black"
                    onPress={handleSearch}
                  />
                </View>
              </ImageBackground>
              <Text style={styles.sectionTitle}>
                Nearby Pharmacies in Bahir Dar
              </Text>
            </>
          }
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

      {/* Footer - Fixed to bottom */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Favorites")}
        >
          <Ionicons name="heart" size={24} color="black" />
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Help")}
        >
          <Ionicons name="help-circle" size={24} color="black" />
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
