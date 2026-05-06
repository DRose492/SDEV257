import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Film_Detail_Screen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{item.title}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Episode</Text>
        <Text style={styles.value}>{item.episode_id}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Director</Text>
        <Text style={styles.value}>{item.director}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Producer</Text>
        <Text style={styles.value}>{item.producer}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Release Date</Text>
        <Text style={styles.value}>{item.release_date}</Text>
      </View>

      <View style={styles.crawlCard}>
        <Text style={styles.label}>Opening Crawl</Text>
        <Text style={styles.crawl}>{item.opening_crawl}</Text>
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
  crawlCard: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    marginBottom: 25,
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
  crawl: {
    color: "#FFE81F",
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
});
