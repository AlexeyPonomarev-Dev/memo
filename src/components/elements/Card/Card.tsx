import React, { useRef, useState, useEffect } from "react";

import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { pink } from "../../../constants/UIColors";
import { styles } from "./style";

const Card = ({ id, value, onCardPress, hasCouple, isOpened }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const turnValue = useRef(new Animated.Value(0)).current;

  // handlers

  const showCard = () => {
    onCardPress(id);
    turnValue.setValue(0);

    Animated.timing(turnValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setIsOpen(true);
    });
  };

  const hideCard = () => {
    turnValue.setValue(1);
    setIsOpen(false);

    Animated.timing(turnValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // interpolation

  const rotateY = turnValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const bgColor = turnValue.interpolate({
    inputRange: [0, 1],
    outputRange: [pink, "white"],
  });

  return (
    <TouchableWithoutFeedback onPress={showCard} disabled={isOpen}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ rotateY }], backgroundColor: bgColor },
        ]}>
        {/* {isOpen && <Text>{value}</Text>} */}
        <Text>{id}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export { Card };
