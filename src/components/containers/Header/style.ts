import { StyleSheet } from "react-native";
import { white } from "../../../constants/UIColors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: white,
  },

  menuIcon: {
    marginLeft: "auto",
  },

  pairsStatus: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
