import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image ,Platform} from "react-native";

const PharmacyCard = ({ pharmacy, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>

                  <Image
                    source={pharmacy.image}
                    style={styles.image}
                    resizeMode="cover"
                    alt="pharmacy"
                    {...(Platform.OS === 'ios' ? { defaultSource: require('../assets/images/logo.jpeg') } : {})}
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
    backgroundColor: "#e6f7ff", 
    flex: 1, 
    margin: 5, 
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,},
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15, 
  },
  infoContainer: {
    flex: 1, 
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
