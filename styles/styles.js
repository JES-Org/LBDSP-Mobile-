import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80, // Make space for the footer
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  searchBackground: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  searchBackgroundImage: {
    opacity: 0.5, // Adjust transparency of the background image
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent background for input fields
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  pharmaciesContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: "center",
  },
});

export default styles;
