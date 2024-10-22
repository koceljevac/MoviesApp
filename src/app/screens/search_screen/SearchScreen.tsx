// src/screens/SearchScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useMovies } from '../../../features/movies/hooks/useMovies';
import SearchSection from '../search_screen/components/SearchSection'; 
import MoviesSection from './../search_screen/components/PopularMoviesSection';

export const SearchScreen = () => {
  const { movies, loading, error } = useMovies();
  const [searchText, setSearchText] = useState('');

  // Filter movies based on the search text
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Pass the search text and handler */}
      <SearchSection searchText={searchText} setSearchText={setSearchText} />

      {/* Pass filtered movies, loading, and error to MoviesSection */}
      <MoviesSection movies={filteredMovies} loading={loading} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
