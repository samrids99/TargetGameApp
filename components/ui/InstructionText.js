import { StyleSheet, Text } from "react-native";
import Colours from "../../constants/Colours";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colours.primary800,
    fontSize: 24,
  },
});
