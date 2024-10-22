// src/screens/search_screen/components/PopularMoviesSection.tsx

import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import MovieCard from "../../../../features/movies/components/MovieCard";
import { Movie } from "../../../../features/movies/types/Movie";

type MoviesSectionProps = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  title: string;
};

const MoviesSection = ({
  movies,
  loading,
  error,
  title,
}: MoviesSectionProps) => {
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (movies.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No movies found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});

export default MoviesSection;
