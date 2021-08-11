import React, { useRef, useState, useEffect, memo } from "react";
import { Animated, TouchableWithoutFeedback, Image } from "react-native";
import { connect, useDispatch } from "react-redux";
import { CARD_ANIMATION_TIME } from "../../../constants/time";
import { pink } from "../../../constants/UIColors";
import { addOpenedCard } from "../../../redux/reducers/game/action";
import { styles } from "./style";

const Card = memo(({ id, value, opened, disabled }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCardValue, setShowCardValue] = useState(false);
  const turnValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!opened) {
      setTimeout(() => {
        hideCard();
      }, CARD_ANIMATION_TIME);
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
    dispatch(addOpenedCard(id));
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
    outputRange: [pink, "white"],
  });

  return (
    <TouchableWithoutFeedback
      onPress={onPressHandler}
      disabled={isOpen || disabled}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ rotateY }], backgroundColor: bgColor },
        ]}>
        {showCardValue && (
          <Image
            style={{ width: 80, height: 100 }}
            source={value}
            resizeMode="contain"
          />
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.data,
    openCards: state.cards.openCards,
    disabled: state.game.disabledCards,
  };
};

export default connect(mapStateToProps)(Card);
