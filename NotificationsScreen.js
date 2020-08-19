import React from "react";
import { View, Button } from "react-native";

export default function NotificationsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Go back home" onPress={() => navigation.goBack()} />
    </View>
  );
}
