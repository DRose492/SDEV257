import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Planet_Detail_Screen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Climate</Text>
        <Text style={styles.value}>{item.climate}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Terrain</Text>
        <Text style={styles.value}>{item.terrain}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Population</Text>
        <Text style={styles.value}>{item.population}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Gravity</Text>
        <Text style={styles.value}>{item.gravity}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Rotation Period</Text>
        <Text style={styles.value}>{item.rotation_period}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Orbital Period</Text>
        <Text style={styles.value}>{item.orbital_period}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Surface Water</Text>
        <Text style={styles.value}>{item.surface_water}</Text>
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
