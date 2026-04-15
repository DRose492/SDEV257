import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TextInput, 
  Button, 
  Modal 
} from 'react-native';

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search planets..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Button 
        title="Submit" 
        onPress={() => setModalVisible(true)} 
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>You entered:</Text>
            <Text style={styles.modalValue}>{searchText}</Text>

            <Button 
              title="Close" 
              onPress={() => setModalVisible(false)} 
            />
          </View>
        </View>
      </Modal>

      {/* Existing Planet List */}
      <FlatList
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.name}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalValue: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
