import { View, StyleSheet, Image, Text } from "react-native";
import TextStyles from "../../../core/styles/textStyles";
import { color } from "react-native-elements/dist/helpers";

type TempProps = {
  image: string;
  city: string;
  condition: string;
  temp: number;
  error: string | null;
  loading: boolean;
};
const CityTemp = ({
  image,
  city,
  condition,
  temp,
  error,
  loading,
}: TempProps) => {
  if (loading) {
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={[TextStyles.small, { color: "white" }]}>{city}</Text>
        <Text style={[TextStyles.p, { color: "white" }]}>{condition}</Text>
      </View>
      <Text style={[TextStyles.h2, { color: "white" }]}>23 °C</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#0f4561",
    justifyContent: "space-between",
  },
  image: {
    height: 100,
    width: 100,
  },
});
export default CityTemp;
