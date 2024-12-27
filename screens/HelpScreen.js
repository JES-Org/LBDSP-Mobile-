import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <Text style={styles.question}>Q: How do I find a pharmacy?</Text>
      <Text style={styles.answer}>A: Use the search bar to find pharmacies by name or location.</Text>

      <Text style={styles.question}>Q: How do I mark a pharmacy as favorite?</Text>
      <Text style={styles.answer}>A: Tap the heart icon to add a pharmacy to your favorites list.</Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text>Email: support@yourapp.com</Text>
      <Text>Phone: +1234567890</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default HelpScreen;
