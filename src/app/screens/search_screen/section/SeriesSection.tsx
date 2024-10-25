import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TextStyles from "../../../../core/styles/textStyles";
import { Series } from "../../../../features/series/models/Series";
import SeriesCard from "../../../../features/movies/components/SeriesCard";

type SeriesSectionProps = {
  series: Series[];
  loading: boolean;
  error: string | null;
  name: string;
  onSeeAllPress?: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};

const SeriesSection = ({
  series,
  loading,
  error,
  name,
  onSeeAllPress,
  fetchNextPage,
  hasNextPage,
}: SeriesSectionProps) => {
  if (loading && !series.length) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (series.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No series found</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={[TextStyles.subtitle, styles.titleText]}>{name}</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={[TextStyles.small, styles.seeAllText]}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={series}
        horizontal
        initialNumToRender={5}
        windowSize={10}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SeriesCard series={item} />}
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage(); // Fetch next page when scrolling reaches the end
          }
        }}
        onEndReachedThreshold={0.5} // Fetch when scrolled to 50% from the end
        ListFooterComponent={
          hasNextPage ? <ActivityIndicator size="small" /> : null
        } // Show loading indicator when fetching next page
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  titleText: {
    color: "white",
  },
  seeAllText: {
    color: "grey",
  },
  flatListContent: {
    padding: 10,
  },
});

export default SeriesSection;
