// src/features/movies/components/MovieCard.tsx

import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../app/navigation/StackNavigator";
import { Movie } from "../../../features/movies/types/Movie";

type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MovieDetails"
>;

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation<MovieDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate("MovieDetails", movie);
  };
  return (
    <Pressable onPress={handlePress} style={styles.cardContainer}>
      <View></View>
      <Image source={{ uri: movie.poster_path }} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    shadowColor: "#ccc",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    marginRight: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
});

export default MovieCard;
