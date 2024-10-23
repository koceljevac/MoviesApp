// src/screens/search_screen/components/SearchSection.tsx

import React from "react";
import { SearchBar } from "react-native-elements";
import { StyleSheet } from "react-native";

type SearchSectionProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchSection = ({ searchText, setSearchText }: SearchSectionProps) => {
  return (
    <SearchBar
      placeholder="Search..."
      value={searchText}
      onChangeText={setSearchText}
      platform="default"
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.inputContainer}
    />
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "black",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#242424",
    borderRadius: 8,
  },
});

export default SearchSection;
