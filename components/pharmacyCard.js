import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native-web";

const PharmacyCard = ({ pharmacy, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>

            <Image
                source={pharmacy.image}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
                <Text style={styles.address}>{pharmacy.address}</Text>
                <Text style={styles.distance}>{pharmacy.distance} km away</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6f7ff", // Light blue background
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15, // Space between image and text
  },
  infoContainer: {
    flex: 1, // Ensures text takes up remaining space
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  distance: {
    fontSize: 12,
    color: "#888",
  },
});

export default PharmacyCard;
