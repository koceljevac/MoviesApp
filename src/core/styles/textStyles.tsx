// src/styles/TextStyles.ts
import { StyleSheet } from "react-native";

const TextStyles = StyleSheet.create({
  // H1 Stil
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
    color: "#333",
    marginBottom: 10,
  },

  // H2 Stil
  h2: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat_700Bold",
    color: "#333",
    marginBottom: 8,
  },

  // Paragraph stil
  p: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#666",
    lineHeight: 22,
  },

  //italic
  italic: {
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Montserrat_400Regular",
    color: "#666",
  },

  //bold
  bold: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
    color: "#333",
  },

  //small
  small: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
    color: "#999",
  },

  //subtitle
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    color: "#555",
    marginBottom: 5,
  },
});

export default TextStyles;
