// src/screens/search_screen/components/SearchSection.tsx

import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

type SearchSectionProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchSection = ({ searchText, setSearchText }: SearchSectionProps) => {
  return (
    <SearchBar
      placeholder="Search movies..."
      value={searchText}
      onChangeText={setSearchText}  // Updates the search text
      platform="default"
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.inputContainer}
    />
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default SearchSection;
