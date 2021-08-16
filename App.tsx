import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { black, white } from "./src/constants/UIColors";
import { store } from "./src/redux/store";
import { Navigation } from "./src/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={black} />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default App;
