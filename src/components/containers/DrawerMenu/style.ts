import { StyleSheet } from "react-native";
import { orange, white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: orange,
  },

  title: {
    width: "100%",
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    width: "100%",
    height: 35,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderRadius: 8,
    backgroundColor: white,
    opacity: 0.8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonExit: {
    paddingHorizontal: 10,
    marginTop: "auto",
    justifyContent: "space-between",

    backgroundColor: "transparent",
  },
});
