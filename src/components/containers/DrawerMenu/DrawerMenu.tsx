import React, { FC } from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { useDispatch } from "react-redux";

import { ExitIcon } from "../../../assets/img/SVG";
import { black } from "../../../constants/UIColors";
import { resetGame } from "../../../redux/reducers/game/action";
import { exitAppHandler, imagesTypes } from "../../../utils";
import { imagesType } from "../../../utils/types";
import { BestResult } from "../../elements/BestResult";
import { styles } from "./style";
import { Props } from "./types";

const DrawerMenu: FC<Props> = ({ closeDrawer }) => {
  const dispatch = useDispatch();

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

      <BestResult />

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
