import { StyleSheet } from "react-native";
import { white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: white,
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    fontWeight: "bold",
  },
});
