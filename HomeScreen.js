import React from "react";
import { Text, Button, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        This is the home screen!
      </Text>
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate("MyModal")}
      />
    </View>
  );
}
