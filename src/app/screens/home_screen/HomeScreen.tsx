import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTopRatedMovies } from "../../../features/movies/hooks/useTopRatedMovies";
import MoviesSection from "../search_screen/section/MoviesSection";
import { usePopularActors } from "../../../features/actors/hooks/usePopularActors";
import ActorCircleFeed from "../../../features/actors/components/ActorCircleFeed";
import TextStyles from "../../../core/styles/textStyles";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export const HomeScreen = () => {
  const navigation = useNavigation();

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

  useEffect(() => {
    if (movies) {
      // Your logic with movies data
    }
  }, [movies]);

  const handleActorPress = (actor) => {
    navigation.navigate("ActorDetails", { actor });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[TextStyles.h2, { color: "white" }]}>Top Actors</Text>
        {actorsLoading && !actors ? (
          <FlatList
            data={[...Array(5)]}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => (
              <ShimmerPlaceholder style={styles.shimmerPlaceholder} />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.actorsContainer}
          />
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
              <TouchableOpacity onPress={() => handleActorPress(item)}>
                <Animatable.View
                  animation="zoomIn"
                  duration={500}
                  easing="ease-in-out"
                >
                  <ActorCircleFeed
                    actorName={item.name}
                    actorImage={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  />
                </Animatable.View>
              </TouchableOpacity>
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

        {moviesLoading && !movies.length ? (
          <View style={styles.moviesShimmerContainer}>
            {[...Array(3)].map((_, index) => (
              <ShimmerPlaceholder key={index} style={styles.shimmerMovie} />
            ))}
          </View>
        ) : (
          <MoviesSection
            movies={movies}
            loading={moviesLoading}
            error={moviesError}
            title="Top Rated Movies"
            fetchNextPage={fetchNextMoviesPage}
            hasNextPage={hasNextMoviesPage}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
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
  shimmerPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  moviesShimmerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  shimmerMovie: {
    width: 150,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
