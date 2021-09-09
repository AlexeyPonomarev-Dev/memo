import React, { FC, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { connect, useDispatch } from "react-redux";

import {
  setBestResult,
  setShowModal,
  setShowResultModal,
} from "../../../redux/reducers/game/action";
import { StoreType } from "../../../redux/storeTypes";
import { setStoreData } from "../../../utils";
import { styles } from "./style";
import { Props } from "./types";

const BestResultModal: FC<Props> = ({ showResultModal, totalSteps }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onSubmitHandler = () => {
    const data = {
      name,
      result: totalSteps,
      date: new Date(),
    };

    dispatch(setShowResultModal(false));
    dispatch(setShowModal(true));
    dispatch(setBestResult(data));
    setStoreData(data);
  };

  return (
    <Modal visible={showResultModal} transparent={true} animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>Поздравляем!</Text>
          <Text style={styles.title}>Вы установили новый рекорд!</Text>
          <Text style={styles.title}>
            Ваш результат:{" "}
            <Text style={styles.result}>{totalSteps} попыток</Text>
          </Text>
          <Text style={styles.emoji}>🎉🎉🎉</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ваше имя"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onSubmitHandler}
            disabled={name.length < 3}>
            <Text>Сохранить результат</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const mapStateToProps = (state: StoreType) => {
  return {
    showResultModal: state.game.showResultModal,
    totalSteps: state.game.totalSteps,
  };
};

export default connect(mapStateToProps)(BestResultModal);
