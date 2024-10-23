import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStackNavigator from "./HomeStackNavigator";
import { SearchScreen } from "../screens/search_screen/SearchScreen";
import { FavoritesScreen } from "../screens/favorite_screen/FavoriteScreen";
import { SettingsScreen } from "../screens/settings_page/SettingsScreen";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          const scale = useSharedValue(1);

          if (focused) {
            scale.value = withTiming(1, {
              duration: 8000,
              easing: Easing.out(Easing.exp),
            });
          } else {
            scale.value = withTiming(1, {
              duration: 300,
              easing: Easing.out(Easing.exp),
            });
          }

          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [{ scale: scale.value }],
            };
          });

          return (
            <Animated.View style={animatedStyle}>
              <Ionicons name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#d3d3d3",
        tabBarStyle: {
          backgroundColor: "#1c1c1c",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
