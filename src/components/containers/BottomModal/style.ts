import { StyleSheet } from "react-native";
import { black, blue, white } from "../../../constants/UIColors";

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
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,

    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    backgroundColor: blue,
    opacity: 0.9,
  },

  title: {
    marginBottom: 20,
    textAlign: "center",

    fontSize: 22,
    fontWeight: "bold",
    color: white,
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 10,

    borderRadius: 8,
    backgroundColor: white,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: black,
  },
});
