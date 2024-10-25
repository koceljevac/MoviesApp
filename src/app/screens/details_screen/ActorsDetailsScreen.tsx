import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { Actor } from "../../../features/actors/models/Actor";
import Icon from "react-native-vector-icons/Ionicons"; // Ikona za dugme

type ActorDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "ActorDetails"
>;

type Props = {
  route: ActorDetailsScreenRouteProp;
};

const { height } = Dimensions.get("window");

const ActorDetailsScreen = ({ route }: Props) => {
  const { actor } = route.params;
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Slika glumca */}
        <Image source={{ uri: actor.profile_path }} style={styles.actorImage} />

        {/* Detalji o glumcu */}
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{actor.name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Known for:</Text>
            <Text style={styles.value}>{actor.known_for_department}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Popularity:</Text>
            <Text style={styles.value}>{actor.popularity.toFixed(2)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Birthday:</Text>
            <Text style={styles.value}>{actor.birthday || "Unknown"}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Place of Birth:</Text>
            <Text style={styles.value}>
              {actor.place_of_birth || "Unknown"}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Biography:</Text>
            <Text style={styles.value}>
              {actor.biography || "No biography available."}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Dugmići */}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContent: {
    padding: 20,
  },
  actorImage: {
    width: "100%",
    height: height / 2.5, // Velika slika glumca
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  value: {
    fontSize: 16,
    color: "white",
    textAlign: "right",
  },
  buttonsContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
});

export default ActorDetailsScreen;
