import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home_screen/HomeScreen";

export type HomeStackParamList = {
  HomeScreen: undefined; // Izmenjeno ime da bi izbegao konflikt
  Details: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen" // Promenio ime u HomeScreen umesto samo Home
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
