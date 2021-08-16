import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Header } from "../components/containers/Header";
import { DrawerMenu } from "../components/containers/DrawerMenu";
import { GameScreen } from "../screens/Game";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        header: () => {
          return <Header />;
        },
      }}
      drawerContent={({ navigation }) => {
        const { closeDrawer } = navigation;
        return <DrawerMenu closeDrawer={closeDrawer} />;
      }}>
      <Drawer.Screen name="Memo" component={GameScreen} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
export { Navigation };
