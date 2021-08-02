import { StyleSheet } from "react-native";
import { grey, pink } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: 80,
    height: 100,
    marginTop: 10,

    backgroundColor: pink,
    borderColor: grey,
    borderWidth: 1,
    borderRadius: 5,
  },
});
