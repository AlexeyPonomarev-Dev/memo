import React, { useRef, useState, useEffect } from "react";
import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { connect, useDispatch } from "react-redux";
import { pink } from "../../../constants/UIColors";
import { openCard } from "../../../redux/reducers/card/actions";
import { styles } from "./style";

const Card = ({ id, value, cards, opened }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const turnValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  // handlers

  useEffect(() => {
    if (opened) return;
    hideCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  console.log(1);

  const onPressHandler = () => {
    const currentCard = cards.find((card: { id: number }) => card.id === id);
    currentCard.isOpen = true;

    dispatch(openCard(id));
    showCard();
  };

  const showCard = () => {
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
      delay: 100,
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
    <TouchableWithoutFeedback onPress={onPressHandler} disabled={isOpen}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ rotateY }], backgroundColor: bgColor },
        ]}>
        {isOpen && <Text>{value}</Text>}
        {/* <Text>{id}</Text> */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.data,
    openCards: state.cards.openCards,
  };
};

export default connect(mapStateToProps)(Card);
