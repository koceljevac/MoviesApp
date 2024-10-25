// navigation/StackNavigator.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import MovieDetailsScreen from "../screens/search_screen/MovieDetailsScreen"; // Uvoz MovieDetailsScreen
import ActorDetailsScreen from "../screens/details_screen/ActorsDetailsScreen"; // Ispravljen uvoz ActorDetailsScreen

import { Movie } from "../../features/movies/types/Movie";
import { Series } from "../../features/series/models/Series";
import { Actor } from "../../features/actors/models/Actor";

// Definišemo tipove parametara za rute
export type RootStackParamList = {
  Main: undefined; // Glavna stranica
  MovieDetails: { movie: Movie } | { series: Series };
  ActorDetails: { actor: Actor };
};

// Kreiramo stack navigator sa definisanim tipovima parametara
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Glavna stranica aplikacije */}
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* Detalji o filmu ili seriji */}
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerShown: false, title: "Movie Details" }}
      />

      {/* Detalji o glumcu */}
      <Stack.Screen
        name="ActorDetails"
        component={ActorDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
