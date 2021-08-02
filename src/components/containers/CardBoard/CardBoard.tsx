import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { Card } from "../../elements/Card";
import { styles } from "./style";
import * as actions from "../../../redux/reducers/card/actions";

const CardBoard = ({ cards, addCouple }) => {
  const [prevCardId, setPrevCardId] = useState<number>(-1);

  const onPressHandler = (cardId: number) => {
    const prevCard = cards.find(crd => crd.id === prevCardId);
    const currentCard = cards.find(crd => crd.id === cardId);

    if (currentCard) currentCard.isOpen = true;
    addCouple(cards);
    if (prevCard?.value) {
      if (prevCard?.value === currentCard?.value) {
        prevCard.hasCouple = true;
        currentCard.hasCouple = true;
        prevCard.isOpen = true;
        currentCard.isOpen = true;

        addCouple(cards);
      } else {
        prevCard.isOpen = false;
        currentCard.isOpen = false;

        addCouple(cards);
      }

      setPrevCardId(-1);
      return;
    }

    setPrevCardId(cardId);
  };

  return (
    <View style={styles.container}>
      {cards.map(item => (
        <Card
          key={item.id}
          id={item.id}
          value={item.value}
          onCardPress={onPressHandler}
          hasCouple={item.hasCouple}
          isOpened={item.isOpen}
        />
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps, actions)(CardBoard);
