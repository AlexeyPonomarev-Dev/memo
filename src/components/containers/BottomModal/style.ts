import { StyleSheet } from "react-native";
import { black, blue, orange, white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  overlay: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  modal: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,

    width: "100%",
    height: 200,
    padding: 20,

    alignItems: "center",

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    backgroundColor: blue,
  },

  title: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: white,
  },

  button: {
    padding: 5,
    marginBottom: 10,

    borderRadius: 8,
    backgroundColor: orange,
  },

  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: black,
  },
});
