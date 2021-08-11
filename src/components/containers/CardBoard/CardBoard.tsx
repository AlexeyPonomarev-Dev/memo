import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { Card } from "../../elements/Card";
import { styles } from "./style";

const CardBoard = ({ cards }: any) => {
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
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(CardBoard);
