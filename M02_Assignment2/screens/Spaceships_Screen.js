import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Animated, { FadeIn } from 'react-native-reanimated';

import RadiantVII from '../assets/RadiantVII.webp';

export default function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
      .then(data => setShips(data.results))
      .catch(err => console.error(err));

    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredShips = ships.filter(ship =>
    ship.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderRightActions = () => {
    return (
      <View style={styles.swipeBox}>
        <Text style={styles.swipeText}>Open</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {imageLoaded && (
        <Image
          source={RadiantVII}
          style={styles.headerImage}
          resizeMode="cover"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Search spaceships..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView style={{ marginTop: 20 }}>
        {filteredShips.map((item) => (
          <Swipeable
            key={item.name}
            renderRightActions={renderRightActions}
            onSwipeableOpen={() => console.log("Swiped:", item.name)}
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
    backgroundColor: "#6f42c1",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  swipeText: {
    color: "white",
    fontWeight: "bold",
  },
});
