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

import Maul from '../assets/Maul.webp';

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(data => setFilms(data.results))
      .catch(err => console.error(err));

    const timer = setTimeout(() => setImageLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderRightActions = () => (
    <View style={styles.swipeBox}>
      <Text style={styles.swipeText}>Open</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {imageLoaded && (
        <Image
          source={Maul}
          style={styles.headerImage}
          resizeMode="cover"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Search films..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView style={{ marginTop: 20 }}>
        {filteredFilms.map((item) => (
          <Swipeable
            key={item.episode_id}
            renderRightActions={renderRightActions}
            onSwipeableOpen={() => console.log("Swiped:", item.title)}
          >
            <Animated.View entering={FadeIn}>
              <TouchableOpacity>
                <Text style={styles.text}>{item.title}</Text>
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
    backgroundColor: "#007bff",
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
