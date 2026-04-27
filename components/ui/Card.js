import { StyleSheet, View, Dimensions } from "react-native";
import Colours from "../../constants/Colours";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colours.primary500,
    borderRadius: 8,
    // use shadow objects for IOS
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    // Use elevation for android only shadow eg. elevation: 8
  },
});
