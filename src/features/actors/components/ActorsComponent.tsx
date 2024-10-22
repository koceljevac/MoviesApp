// src/components/ActorComponent.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Actor } from "../../actors/models/Actor";
import { KnownFor } from "../models/KnowFor";
import TextStyles from "../../../core/styles/textStyles";

type ActorComponentProps = {
  actor: Actor;
};

const ActorComponent: React.FC<ActorComponentProps> = ({ actor }) => {
  const renderKnownFor = ({ item }: { item: KnownFor }) => (
    <View style={styles.knownForItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <Text style={TextStyles.h2}>{item.title}</Text>
      <Text>Release Date: {item.release_date}</Text>
      <Text>Rating: {item.vote_average}/10</Text>
    </View>
  );

  return (
    <View style={styles.actorContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}` }}
        style={styles.profile}
      />
      <Text style={styles.actorName}>{actor.name}</Text>
      <Text>Popularity: {actor.popularity}</Text>

      <Text style={styles.sectionTitle}>Known For:</Text>
      <FlatList
        data={actor.known_for}
        renderItem={renderKnownFor}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actorContainer: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 10,
  },
  actorName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
  knownForItem: {
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
});

export default ActorComponent;
