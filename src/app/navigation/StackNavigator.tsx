// navigation/StackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import MovieDetailsScreen from '../screens/search_screen/MovieDetailsScreen'; // Uvezi MovieDetailsScreen
import { Movie } from '../../features/movies/types/Movie';

export type RootStackParamList = {
  Main: undefined;
  MovieDetails: Movie
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerShown: true, title: 'Movie Details' }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
