import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import { connect, useDispatch } from "react-redux";

import { resetGame, setShowModal } from "../../../redux/reducers/game/action";
import { StoreType } from "../../../redux/storeTypes";
import { exitAppHandler } from "../../../utils";
import { styles } from "./style";
import { NavigationProps, Props } from "./types";

const BottomModal: FC<Props> = ({ showModal }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  const resetHandler = () => {
    dispatch(resetGame());
  };

  const openMenuHandler = () => {
    navigation.openDrawer();
    dispatch(setShowModal(false));
  };

  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={closeModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View>
              <Text style={styles.title}>Игра Окончена</Text>

              <TouchableOpacity style={styles.button} onPress={resetHandler}>
                <Text style={styles.buttonText}>Повторить</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={openMenuHandler}>
                <Text style={styles.buttonText}>Сменить Кратинки</Text>
              </TouchableOpacity>

              {Platform.OS === "android" && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={exitAppHandler}>
                  <Text style={styles.buttonText}>Выйти</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const mapStateToProps = (state: StoreType) => {
  return {
    showModal: state.game.showModal,
  };
};

export default connect(mapStateToProps)(BottomModal);
