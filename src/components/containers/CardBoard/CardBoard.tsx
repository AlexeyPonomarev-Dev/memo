import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect, useDispatch } from "react-redux";
import {
  hideCouple,
  resetOpenCards,
} from "../../../redux/reducers/card/actions";

import { Card } from "../../elements/Card";
import { styles } from "./style";

const CardBoard = ({ cards, openCards }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (openCards.length === 2) {
      const firstCard = cards.find(
        (card: { id: number }) => card.id === openCards[0],
      );
      const secondCard = cards.find(
        (card: { id: number }) => card.id === openCards[1],
      );

      firstCard.value === secondCard.value
        ? dispatch(resetOpenCards())
        : dispatch(hideCouple(cards, openCards));
    }
  }, [cards, dispatch, openCards]);

  return (
    <View style={styles.container}>
      {cards.map((item: any) => (
        <Card
          key={item.id}
          id={item.id}
          value={item.value}
          opened={item.isOpen}
        />
      ))}
      <Text>open cards = {openCards.length}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.data,
    openCards: state.cards.openCards,
  };
};

export default connect(mapStateToProps)(CardBoard);
