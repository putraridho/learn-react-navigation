import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      {otherParam && <Text>otherParam: {JSON.stringify(otherParam)}</Text>}
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
