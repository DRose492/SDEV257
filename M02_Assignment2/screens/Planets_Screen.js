import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  Modal, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Animated, { FadeIn } from 'react-native-reanimated';

// ⭐ Local Tatooine image (WEBP)
import Tatooine from '../assets/Tatooine.webp';

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState("");

  // ⭐ Lazy-load image state
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));

    // ⭐ Simulated lazy-load delay
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSwipe = (name) => {
    setSelectedPlanet(name);
    setModalVisible(true);
  };

  const renderRightActions = () => {
    return (
      <View style={styles.swipeBox}>
        <Text style={styles.swipeText}>Open</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* ⭐ Lazy-loaded Tatooine image */}
      {imageLoaded && (
        <Image
          source={Tatooine}
          style={styles.headerImage}
          resizeMode="cover"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Search planets..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Button 
        title="Submit" 
        onPress={() => {
          setSelectedPlanet(searchText);
          setModalVisible(true);
        }} 
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>You selected:</Text>
            <Text style={styles.modalValue}>{selectedPlanet}</Text>

            <Button 
              title="Close" 
              onPress={() => setModalVisible(false)} 
            />
          </View>
        </View>
      </Modal>

      <ScrollView style={{ marginTop: 20 }}>
        {planets.map((item) => (
          <Swipeable
            key={item.name}
            renderRightActions={renderRightActions}
            onSwipeableOpen={() => handleSwipe(item.name)}
          >
            <Animated.View entering={FadeIn}>
              <TouchableOpacity>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </Animated.View>
          </Swipeable>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
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
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  swipeBox: {
    backgroundColor: "#28a745",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  swipeText: {
    color: "white",
    fontWeight: "bold",
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
