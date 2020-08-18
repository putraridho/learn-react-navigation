import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "./SettingScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

const Tab = createStackNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="First">
            {() => (
              <SettingsStack.Navigator initialRouteName="Settings">
                <SettingsStack.Screen
                  name="Settings"
                  component={SettingScreen}
                />
                <SettingsStack.Screen
                  name="Profile"
                  component={ProfileScreen}
                />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Second">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailScreen} />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
