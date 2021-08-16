import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect, useDispatch } from "react-redux";

import { resetGame, setShowModal } from "../../../redux/reducers/game/action";
import { IStore } from "../../../redux/storeTypes";
import { styles } from "./style";

interface Props {
  showModal: boolean;
}

interface NavigationProps {
  openDrawer: () => void;
}

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
        <View style={styles.modal}>
          <TouchableWithoutFeedback>
            <View>
              <Text style={styles.title}>Игра Окончена</Text>

              <TouchableOpacity style={styles.button} onPress={resetHandler}>
                <Text style={styles.buttonText}>Повторить</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={openMenuHandler}>
                <Text style={styles.buttonText}>Сменить Кратинки</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    showModal: state.game.showModal,
  };
};

export default connect(mapStateToProps)(BottomModal);
