import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#60bb39",
    borderRadius: 8,
    // use shadow objects for IOS
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    // Use elevation for android only shadow eg. elevation: 8
  },
});
