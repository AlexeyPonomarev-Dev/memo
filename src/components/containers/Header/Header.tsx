import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { MenuIcon, PairIcon } from "../../../assets/img/SVG";
import { styles } from "./style";
import { HeaderNavigationProp } from "./types";
import { orange } from "../../../constants/UIColors";
import { IStore } from "../../../redux/storeTypes";

interface Props {
  progress: number;
  totalSteps: number;
}

const Header: FC<Props> = ({ progress, totalSteps }) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const openMenuHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.pairsStatus}>
        <PairIcon width={25} height={25} color={orange} />
        <Text> X {progress}</Text>
      </View>
      <Text>Попыток: {totalSteps}</Text>
      <TouchableOpacity style={styles.menuIcon} onPress={openMenuHandler}>
        <MenuIcon width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    progress: state.game.progress,
    totalSteps: state.game.totalSteps,
  };
};

export default connect(mapStateToProps)(Header);
