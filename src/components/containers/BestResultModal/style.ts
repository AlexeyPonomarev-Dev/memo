import { StyleSheet } from "react-native";
import { gray, green, orange, white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: 300,
    alignItems: "center",
    padding: 25,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: white,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    color: green,
  },
  emoji: {
    marginTop: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: gray,
    marginVertical: 15,
    padding: 10,
  },
  button: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: orange,
    alignItems: "center",
  },
});
