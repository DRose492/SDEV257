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

export default function Films_Screen({ navigation }) {
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
        placeholderTextColor="#FFE81F"
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView style={{ marginTop: 20 }}>
        {filteredFilms.map((item) => (
          <Swipeable
            key={item.episode_id}
            renderRightActions={renderRightActions}
            onSwipeableOpen={() =>
              navigation.navigate("FilmDetail", { item })
            }
          >
            <Animated.View entering={FadeIn}>
              <TouchableOpacity style={styles.card}>
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
    backgroundColor: "#0d0d0d",
    padding: 20,
  },
  headerImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#4da6ff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#4da6ff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    color: "#f2f2f2",
    backgroundColor: "#1a1a1a",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4da6ff",
    shadowColor: "#4da6ff",
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    fontSize: 20,
    color: "#f2f2f2",
  },
  swipeBox: {
    backgroundColor: "#4da6ff",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  swipeText: {
    color: "#0d0d0d",
    fontWeight: "bold",
  },
});
