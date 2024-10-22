import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useTopRatedMovies } from "../../../features/movies/hooks/useTopRatedMovies";
import MoviesSection from "../search_screen/section/PopularMoviesSection";
import { usePopularActors } from "../../../features/actors/hooks/usePopularActors";
import ActorCircleFeed from "../../../features/actors/components/ActorCircleFeed";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

export const HomeScreen = () => {
  const {
    movies,
    loading: moviesLoading,
    error: moviesError,
  } = useTopRatedMovies();
  const {
    actors,
    loading: actorsLoading,
    error: actorsError,
  } = usePopularActors();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.sectionTitle}>Top Actors</Text>

          {actorsLoading ? (
            <Text>Loading actors...</Text>
          ) : actorsError ? (
            <Text>Error loading actors: {actorsError}</Text>
          ) : (
            <ScrollView
              horizontal={true} // Omogućava horizontalno skrolovanje
              showsHorizontalScrollIndicator={false} // Skrivanje indikatora skrolovanja
              style={styles.horizontalScrollContainer}
            >
              <View style={styles.actorsContainer}>
                {actors.map((actor) => (
                  <ActorCircleFeed
                    key={actor.id}
                    actorName={actor.name}
                    actorImage={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  />
                ))}
              </View>
            </ScrollView>
          )}

          <MoviesSection
            movies={movies}
            loading={moviesLoading}
            error={moviesError}
            title="Top Rated Movies"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white", // Možeš promeniti boju pozadine
  },
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  horizontalScrollContainer: {
    marginBottom: 20, // Margina ispod horizontalne sekcije
  },
  actorsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap", // Sprečava prelazak u sledeći red
  },
});

export default HomeScreen;
