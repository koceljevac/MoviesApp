import { Actor } from "../models/Actor";
import { View, StyleSheet, Image, Text } from "react-native";
import TextStyles from "../../../core/styles/textStyles";

type ActorCircleFeedProps = {
  actorName: string;
  actorImage: string;
};

const ActorCircleFeed = ({ actorName, actorImage }: ActorCircleFeedProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actorImage }} style={styles.circleImage}></Image>
      <Text style={TextStyles.small}>{actorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
  },
});
export default ActorCircleFeed;
