import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Platform,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";

import { ExitIcon } from "../../../assets/img/SVG";
import { black } from "../../../constants/UIColors";
import { resetGame } from "../../../redux/reducers/game/action";
import { imagesTypes } from "../../../utils";
import { imagesType } from "../../../utils/types";
import { styles } from "./style";

interface Props {
  closeDrawer: () => void;
}

const DrawerMenu = ({ closeDrawer }: Props) => {
  const dispatch = useDispatch();

  const exitAppHandler = () => {
    Alert.alert("Закрыть приложение?", "Вы действительно хотите выйти?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.buttonText]}>Options</Text>

      {imagesTypes.map((type: imagesType) => {
        const onMenuButtonHandler = () => {
          dispatch(resetGame(type));
          closeDrawer();
        };

        return (
          <TouchableOpacity
            key={type}
            style={[styles.button]}
            onPress={onMenuButtonHandler}
            activeOpacity={0.6}>
            <Text style={styles.buttonText}>{type.replace("-", " ")}</Text>
          </TouchableOpacity>
        );
      })}

      {Platform.OS === "android" && (
        <TouchableOpacity
          style={[styles.button, styles.buttonExit]}
          onPress={exitAppHandler}
          activeOpacity={0.6}>
          <Text style={styles.buttonText}>Exit</Text>
          <ExitIcon width={25} height={25} color={black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export { DrawerMenu };
