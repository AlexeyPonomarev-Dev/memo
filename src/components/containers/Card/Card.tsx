import React, { useRef, useState, useEffect } from "react";
import { Animated, TouchableWithoutFeedback, Image } from "react-native";
import { connect, useDispatch } from "react-redux";
import { CARD_ANIMATION_TIME } from "../../../constants/time";
import { orange } from "../../../constants/UIColors";
import { openCard } from "../../../redux/reducers/game/action";
import { styles } from "./style";

const Card = ({
  id,
  value,
  opened,
  disabled,
  size: { width, height },
  gameStarted,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCardValue, setShowCardValue] = useState(false);
  const turnValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!opened) {
      setTimeout(
        () => {
          hideCard();
        },
        gameStarted ? CARD_ANIMATION_TIME : 0,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  // handlers

  const showCardValueHandler = (val: boolean) => {
    setTimeout(() => {
      setShowCardValue(val);
    }, CARD_ANIMATION_TIME / 2);
  };

  const onPressHandler = () => {
    dispatch(openCard(id));
    showCard();
  };

  const showCard = () => {
    setIsOpen(true);

    showCardValueHandler(true);

    turnValue.setValue(0);
    Animated.timing(turnValue, {
      toValue: 1,
      duration: CARD_ANIMATION_TIME,
      useNativeDriver: false,
    }).start();
  };

  const hideCard = () => {
    turnValue.setValue(1);
    setIsOpen(false);
    showCardValueHandler(false);

    Animated.timing(turnValue, {
      toValue: 0,
      duration: CARD_ANIMATION_TIME,
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
    outputRange: [orange, "white"],
  });

  return (
    <TouchableWithoutFeedback
      onPress={onPressHandler}
      disabled={isOpen || disabled}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ rotateY }],
            backgroundColor: bgColor,
            width,
            height,
          },
        ]}>
        {showCardValue && gameStarted && (
          <Image style={styles.image} source={value} resizeMode="contain" />
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.game.cards,
    gameStarted: state.game.gameStarted,
  };
};

export default connect(mapStateToProps)(Card);
