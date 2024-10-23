import React from "react";
import TextStyles from "../../../../core/styles/textStyles";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileSettingsProps = {
  name: string;
  image: string;
  error: string | null;
  loading: boolean;
  onNotificationPress: () => void;
};

const ProfileSection = ({
  name,
  image,
  loading,
  error,
  onNotificationPress,
}: ProfileSettingsProps) => {
  if (loading) {
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

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageCircle} />
      <View style={styles.textContainer}>
        <Text style={TextStyles.small}>Good Morning</Text>
        <Text style={TextStyles.p}>{name}</Text>
      </View>
      <TouchableOpacity
        onPress={onNotificationPress}
        style={styles.notificationButton}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  imageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
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
  notificationButton: {
    padding: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileSection;
