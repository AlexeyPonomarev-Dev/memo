import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MenuIcon } from "../../../assets/img/SVG";
import { styles } from "./style";
import { HeaderNavigationProp } from "./types";

const Header = () => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const openMenuHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memo</Text>
      <TouchableOpacity onPress={openMenuHandler}>
        <MenuIcon width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
