import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TextStyles from "../../../core/styles/textStyles";
import SearchSection from "../search_screen/section/SearchSection";

export const FavoritesScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={TextStyles.h2}>Favorites</Text>
          <SearchSection
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </View>
        <View style={styles.container}>
          <Text style={TextStyles.h2}>Notes</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    alignContent: "flex-start",
    flex: 1,
    padding: 8,
  },
});
