import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen"; // Import HomeScreen
import { PharmacyProvider } from "./contexts/PharmacyContext";
import { LocationProvider } from "./contexts/LocationContext";
const Stack = createStackNavigator();
import FavoritesScreen from "./screens/FavoritesScreen";
import HelpScreen from "./screens/HelpScreen";
export default function App() {
  return (
    <LocationProvider>
      <PharmacyProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "DrugSearch" }}
            />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="Help" component={HelpScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PharmacyProvider>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
