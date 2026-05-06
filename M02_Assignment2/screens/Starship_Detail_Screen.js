import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Starship_Detail_Screen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Model</Text>
        <Text style={styles.value}>{item.model}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Manufacturer</Text>
        <Text style={styles.value}>{item.manufacturer}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Cost</Text>
        <Text style={styles.value}>{item.cost_in_credits}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Length</Text>
        <Text style={styles.value}>{item.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Crew</Text>
        <Text style={styles.value}>{item.crew}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Passengers</Text>
        <Text style={styles.value}>{item.passengers}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Hyperdrive Rating</Text>
        <Text style={styles.value}>{item.hyperdrive_rating}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Starship Class</Text>
        <Text style={styles.value}>{item.starship_class}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    padding: 20,
  },
  header: {
    fontSize: 32,
    color: "#FFE81F",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4da6ff",
  },
  label: {
    color: "#FFE81F",
    fontSize: 16,
    marginBottom: 4,
  },
  value: {
    color: "#f2f2f2",
    fontSize: 18,
  },
});
