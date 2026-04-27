import { Text, StyleSheet, Platform } from "react-native";
import Colours from "../../constants/Colours";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 2 : 3,
    borderWidth: Platform.select({ ios: 2, android: 3 }),
    borderColor: "white",
    padding: 12,
    fontFamily: "ZenDots",
    maxWidth: "80%",
  },
});
