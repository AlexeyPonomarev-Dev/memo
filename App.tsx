import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { CardBoard } from "./src/components/containers/CardBoard";
import { pink2 } from "./src/constants/UIColors";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <CardBoard />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: pink2,
  },
});

export default App;
