import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen"; // Import HomeScreen
import { PharmacyProvider } from "./contexts/PharmacyContext";
import { LocationProvider } from "./contexts/LocationContext";
import FavoritesScreen from "./screens/FavoritesScreen";
import HelpScreen from "./screens/HelpScreen";
const Stack = createStackNavigator();
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import PharmacyDetails from "./screens/PharmacyDetails";
export default function App() {
  return (
    <LocationProvider>
      <PharmacyProvider>
        <NavigationContainer>
          <View style={Platform.OS === "web" ? styles.webView : styles.mobileView}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "DrugSearch" }}
              />
              <Stack.Screen name="PharmacyDetails" component={PharmacyDetails} options={{ title: 'Pharmacy Details' }} />

              <Stack.Screen name="Favorites" component={FavoritesScreen} />
              <Stack.Screen name="Help" component={HelpScreen} />
            </Stack.Navigator>
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PharmacyProvider>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  mobileView: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  webView: {
    flex: 1,
    backgroundColor: "fff",
    marginRight: "auto",
    marginLeft: "auto",
    width: 480, // Restrict width for web view
    padding: 20,
    borderWidth: 1,
    borderColor: "#yellow",
  },
});
