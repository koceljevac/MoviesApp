import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MovieCard from "../../../../features/movies/components/MovieCard";
import { Movie } from "../../../../features/movies/types/Movie";
import TextStyles from "../../../../core/styles/textStyles";
import * as Animatable from "react-native-animatable";

type MoviesSectionProps = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  title: string;
  onSeeAllPress?: () => void;
  fetchNextPage: () => void; // Function to fetch next page
  hasNextPage: boolean | undefined; // Indicator if there is a next page
};

const MoviesSection = ({
  movies,
  loading,
  error,
  title,
  onSeeAllPress,
  fetchNextPage,
  hasNextPage,
}: MoviesSectionProps) => {
  if (loading && !movies.length) {
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
      <View style={styles.header}>
        <Text style={[TextStyles.subtitle, styles.titleText]}>{title}</Text>
        {onSeeAllPress && (
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={[TextStyles.small, styles.seeAllText]}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={movies}
        horizontal
        initialNumToRender={5}
        windowSize={10}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Animatable.View
            animation="zoomIn"
            duration={500}
            delay={index + 100}
            easing="ease-in-out"
          >
            <MovieCard movie={item} />
          </Animatable.View>
        )}
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage(); // Fetch next page when scrolling reaches the end
          }
        }}
        onEndReachedThreshold={0.5} // Fetch when scrolled to 50% from the end
        ListFooterComponent={
          hasNextPage ? <ActivityIndicator size="small" /> : null
        } // Show loading indicator when fetching next page
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  titleText: {
    color: "white",
  },
  seeAllText: {
    color: "grey",
  },
  flatListContent: {
    padding: 10,
  },
});

export default MoviesSection;
