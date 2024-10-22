// src/features/movies/components/MovieCard.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../app/navigation/StackNavigator'; 
import { Movie } from '../../../features/movies/types/Movie'; 

type MovieDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'MovieDetails'>;

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation<MovieDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('MovieDetails', movie); 
  };
  return (
    <Pressable onPress={handlePress} style={styles.cardContainer}>
      <Image source={{ uri: movie.poster_path }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average}/10</Text>
  
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 350,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
    marginRight:10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffcc00',
  },
});

export default MovieCard;
