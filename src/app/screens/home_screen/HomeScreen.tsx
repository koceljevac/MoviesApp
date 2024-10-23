import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useTopRatedMovies } from "../../../features/movies/hooks/useTopRatedMovies";
import MoviesSection from "../search_screen/section/MoviesSection";
import { usePopularActors } from "../../../features/actors/hooks/usePopularActors";
import ActorCircleFeed from "../../../features/actors/components/ActorCircleFeed";
import TextStyles from "../../../core/styles/textStyles";

export const HomeScreen = () => {
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
    fetchNextPage: fetchNextMoviesPage,
    hasNextPage: hasNextMoviesPage,
  } = useTopRatedMovies();

  const {
    data: actors,
    isLoading: actorsLoading,
    error: actorsError,
    fetchNextPage: fetchNextActorsPage,
    hasNextPage: hasNextActorsPage,
  } = usePopularActors();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[TextStyles.h2, { color: "white" }]}>Top Actors</Text>
        {actorsLoading && !actors ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : actorsError ? (
          <Text style={styles.errorText}>
            Error loading actors: {actorsError}
          </Text>
        ) : (
          <FlatList
            data={actors}
            horizontal
            keyExtractor={(actor, index) =>
              actor.id ? actor.id.toString() : index.toString()
            }
            renderItem={({ item }) => (
              <ActorCircleFeed
                actorName={item.name}
                actorImage={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              />
            )}
            showsHorizontalScrollIndicator={false}
            onEndReached={() => {
              if (hasNextActorsPage) {
                fetchNextActorsPage();
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              hasNextActorsPage ? <ActivityIndicator size="small" /> : null
            }
            contentContainerStyle={styles.actorsContainer}
          />
        )}

        <MoviesSection
          movies={movies}
          loading={moviesLoading}
          error={moviesError}
          title="Top Rated Movies"
          fetchNextPage={fetchNextMoviesPage} // Pass the function to fetch the next page
          hasNextPage={hasNextMoviesPage} // Pass whether more pages exist
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    padding: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  actorsContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
