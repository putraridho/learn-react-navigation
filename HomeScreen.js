import React from "react";
import { Text, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function Feed({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Feed</Text>
      <Button
        title="Go to Messages"
        onPress={() => navigation.navigate("Messages")}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Root", { screen: "Settings" })}
      />
    </View>
  );
}

function Messages({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Messages</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function HomeScreen() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Feed" component={Feed} />
      <Screen name="Messages" component={Messages} />
    </Navigator>
  );
}
