import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import TextStyles from "../../../core/styles/textStyles";
import RelatedMovieSection from "../details_screen/section/RelatedMovieSection";
import { useSimilarMovies } from "../../../features/movies/hooks/useSimilarMovies";

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "MovieDetails"
>;

type Props = {
  route: MovieDetailsScreenRouteProp;
};

const { height } = Dimensions.get("window");

const MovieDetailsScreen = ({ route }: Props) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    vote_count,
    id, // Add id to access movieId for similar movies
  } = route.params;

  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  // Move the hook call inside the component
  const {
    data: moviesSimilar,
    isLoading: similarMoviesLoading,
    isError: similanMoviesError,
    fetchNextPage: fetchSimilarMoviesPage,
    hasNextPage: hasNextSimilarMoviePage,
  } = useSimilarMovies(id); // Use the hook inside the component

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  console.log(moviesSimilar);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: poster_path }}
        style={styles.imageBackground}
        blurRadius={8}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
          style={styles.gradient}
        />
      </ImageBackground>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Icon
              name={isFavorite ? "heart" : "heart-outline"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.movieInfoSection}>
            <Image source={{ uri: poster_path }} style={styles.imageMovie} />
            <View style={styles.movieTextContainer}>
              <Text style={TextStyles.subtitle}>{title}</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={12} color="#b0b01a" />
                <Text style={TextStyles.small}>{vote_average}</Text>
                <Text
                  style={[TextStyles.small, { color: "grey", marginStart: 10 }]}
                >
                  {vote_count + " reviews"}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.column}>
              <Text style={[styles.label, styles.whiteText]}>Storyline:</Text>
              <Text style={{ color: "rgba(365, 365, 365, 0.8)", marginTop: 5 }}>
                {overview}
              </Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={TextStyles.h2}>Related Movies</Text>
            <RelatedMovieSection
              movies={moviesSimilar}
              loading={similarMoviesLoading}
              error={similanMoviesError ? similanMoviesError.toString() : ""}
              fetchNextPage={fetchSimilarMoviesPage}
              hasNextPage={hasNextSimilarMoviePage}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height / 2.8,
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    paddingTop: 10,
  },
  movieInfoSection: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 20,
  },
  imageMovie: {
    width: 120,
    height: 170,
    borderRadius: 10,
  },
  movieTextContainer: {
    flexDirection: "column",
    paddingStart: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  detailsContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  column: {
    flexDirection: "column",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    flexShrink: 1,
    textAlign: "right",
  },
  whiteText: {
    color: "white",
  },
});

export default MovieDetailsScreen;
