import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  // Mock data for the favorite items (you can replace this with real data)
  useEffect(() => {
    // Example of getting favorites, replace with real data fetching logic
    const mockFavorites = [
      { id: "1", name: "Pharmacy A" },
      { id: "2", name: "Pharmacy B" },
    ];
    setFavorites(mockFavorites);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default FavoritesScreen;
