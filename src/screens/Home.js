import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({ navigation }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const item = {
    id: 1,
    title: "É ISSO BEBÊ, TA CERTA",
    group: "Mc IG",
    album_image: "https://i.scdn.co/image/ab67616d00001e0244e36e6146fe2da790a1c86f",
    album: "TMOIG",
    year: "2024",
    genre: "Funk",

  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem
        isPlaying={() => currentPlaying == item.id}
        music={item}
        navigation={navigation}
        onPlayPause={() => { }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  },
});
