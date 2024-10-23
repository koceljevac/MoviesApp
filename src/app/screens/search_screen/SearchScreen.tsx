import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { usePopularMovies } from "../../../features/movies/hooks/usePopularMovies";
import { usePopularTVSeries } from "../../../features/movies/hooks/usePopularTvSeries";
import SearchSection from "./section/SearchSection";
import MoviesSection from "./section/MoviesSection";
import SeriesSection from "./section/SeriesSection";
import { useNowPlayingMovies } from "../../../features/movies/hooks/useNowPlayingMovies";
import { ScrollView } from "react-native-gesture-handler";

export const SearchScreen = () => {
  // Get hooks data
  const {
    data: dataPopularMovies,
    isLoading: loadingPopularMovies,
    error: errorPopularMovies,
    fetchNextPage: fetchNextPopularMoviesPage,
    hasNextPage: hasNextPopularMoviesPage,
  } = usePopularMovies();

  const {
    data: series,
    isLoading: loadingPopularSeries,
    error: errorPopularSeries,
    fetchNextPage: fetchNextSeriesPage,
    hasNextPage: hasNextSeriesPage,
  } = usePopularTVSeries();

  const {
    data: nowDataPlaying,
    isLoading: nowMovie,
    error: nowError,
    fetchNextPage: fetchNextNowPlayingPage,
    hasNextPage: hasNextNowPlayingPage,
  } = useNowPlayingMovies();

  // Search state
  const [searchText, setSearchText] = useState("");

  // Filtered results based on search text
  const filteredMovies = dataPopularMovies.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredSeries = series.filter((series) =>
    series?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredMoviesNowPlaying = nowDataPlaying.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchSection searchText={searchText} setSearchText={setSearchText} />
        <ScrollView>
          <MoviesSection
            movies={filteredMoviesNowPlaying}
            loading={nowMovie}
            error={nowError}
            title="Now Playing Movies"
            fetchNextPage={fetchNextNowPlayingPage}
            hasNextPage={hasNextNowPlayingPage}
          />
          <MoviesSection
            movies={filteredMovies}
            loading={loadingPopularMovies}
            error={errorPopularMovies}
            title="Popular Movies"
            fetchNextPage={fetchNextPopularMoviesPage}
            hasNextPage={hasNextPopularMoviesPage}
          />
          <SeriesSection
            series={filteredSeries}
            loading={loadingPopularSeries}
            error={errorPopularSeries}
            name="Popular Series"
            fetchNextPage={fetchNextSeriesPage}
            hasNextPage={hasNextSeriesPage}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
});

export default SearchScreen;
