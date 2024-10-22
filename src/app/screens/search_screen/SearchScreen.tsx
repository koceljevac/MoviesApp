// src/screens/SearchScreen.tsx

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { usePopularMovies } from "../../../features/movies/hooks/usePopularMovies";
import SearchSection from "./section/SearchSection";
import MoviesSection from "./section/PopularMoviesSection";

export const SearchScreen = () => {
  const { movies, loading, error } = usePopularMovies();
  const [searchText, setSearchText] = useState("");

  // Filter movies based on the search text
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchSection searchText={searchText} setSearchText={setSearchText} />

      <MoviesSection
        movies={filteredMovies}
        loading={loading}
        error={error}
        title="Popular Movies"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
