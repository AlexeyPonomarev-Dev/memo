import React, { useState } from "react";
import { View, LayoutChangeEvent } from "react-native";
import { connect } from "react-redux";

import { Card } from "../Card";
import { styles } from "./style";

const CardBoard = ({ cards }: any) => {
  const [size, setSize] = useState({
    width: 80,
    height: 100,
  });

  const getContainerSize = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = event;

    setSize({
      width: width / 4.8,
      height: height / 7,
    });
  };

  return (
    <View style={styles.container} onLayout={getContainerSize}>
      {cards.map((item: any) => (
        <Card
          key={item.id}
          id={item.id}
          value={item.value}
          opened={item.isOpen}
          size={size}
        />
      ))}
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.game.cards,
  };
};

export default connect(mapStateToProps)(CardBoard);
