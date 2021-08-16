import { StyleSheet } from "react-native";
import { orange } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
    padding: 5,

    borderColor: orange,
    borderWidth: 2,
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
