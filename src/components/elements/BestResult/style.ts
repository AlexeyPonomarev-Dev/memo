import { StyleSheet } from "react-native";
import { green, orange, white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 30,
    padding: 15,
    backgroundColor: white,
    borderRadius: 10,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  markText: {
    fontWeight: "bold",
    fontSize: 16,
    color: green,
  },
  resetButton: {
    padding: 7,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: orange,
  },
});
