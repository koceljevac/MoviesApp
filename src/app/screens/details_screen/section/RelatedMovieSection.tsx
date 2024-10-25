import { Movie } from "../../../../features/movies/types/Movie";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import MovieCard from "../../../../features/movies/components/MovieCard";
import * as Animatable from "react-native-animatable";
import TextStyles from "../../../../core/styles/textStyles";

type RelatedMovieprops = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};
const RelatedMovieSection = ({
  movies,
  loading,
  error,
  fetchNextPage,
  hasNextPage,
}: RelatedMovieprops) => {
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
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        hasNextPage ? <ActivityIndicator size="small" /> : null
      }
    />
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

export default RelatedMovieSection;
