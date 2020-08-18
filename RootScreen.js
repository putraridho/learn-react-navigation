import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";

const { Navigator, Screen } = createStackNavigator();

export default function RootScreen() {
  return (
    <Navigator>
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Settings" component={SettingScreen} />
    </Navigator>
  );
}
