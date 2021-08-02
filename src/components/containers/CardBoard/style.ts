import { StyleSheet } from "react-native";
import { pink2 } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",

    width: "100%",
    height: "100%",
    padding: 10,

    backgroundColor: pink2,
  },
});
