import React, { FC } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { connect, useDispatch } from "react-redux";
import { setBestResult } from "../../../redux/reducers/game/action";
import { SET_BEST_RESULT } from "../../../redux/reducers/game/actionTypes";
import { ResultType } from "../../../redux/reducers/game/types";
import { store } from "../../../redux/store";
import { StoreType } from "../../../redux/storeTypes";
import { getStoreData, resetStoreData } from "../../../utils";
import { styles } from "./style";

interface BestResultProps {
  bestResult: ResultType;
}

getStoreData().then(data => store.dispatch({ type: SET_BEST_RESULT, data }));

const BestResult: FC<BestResultProps> = ({ bestResult }) => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    resetStoreData();
    dispatch(setBestResult());
  };

  const resetResultHandler = () => {
    Alert.alert("Сбросить лучший результат?", "Вы уверены?", [
      {
        text: "Сбросить",
        onPress: resetHandler,
        style: "cancel",
      },
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel",
      },
    ]);
  };

  return bestResult?.result === 0 ? null : (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Лучший результат: </Text>
        <Text style={styles.markText}>{bestResult?.result}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Игрок:</Text>
        <Text style={styles.markText}>{bestResult?.name}</Text>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetResultHandler}>
        <Text style={styles.text}>Сбросить</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: StoreType) => {
  return {
    bestResult: state.game.bestResult,
  };
};

export default connect(mapStateToProps)(BestResult);
