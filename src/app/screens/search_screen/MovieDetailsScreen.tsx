// src/screens/MovieDetailsScreen.tsx

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"; // Dodaj Image komponentu
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator"; // Importuje tipove za rute

// Definišeš tip za rutu
type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "MovieDetails"
>;

type Props = {
  route: MovieDetailsScreenRouteProp;
};

const MovieDetailsScreen = ({ route }: Props) => {
  const { title, overview, release_date, vote_average, poster_path } =
    route.params;
  return (
    <ScrollView style={styles.scrollView}>
      <Image source={{ uri: poster_path }} style={styles.image} />
      <Text style={styles.title}>Movie Details</Text>
      <Text style={styles.movieTitle}>Title: {title}</Text>
      <Text style={styles.movieOverview}>Overview: {overview}</Text>
      <Text style={styles.movieReleaseDate}>Release Date: {release_date}</Text>
      <Text style={styles.movieRating}>Rating: {vote_average}/10</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  scrollView: {
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  movieOverview: {
    fontSize: 16,
    marginBottom: 10,
  },
  movieReleaseDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  movieRating: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieDetailsScreen;
