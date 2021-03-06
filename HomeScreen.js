import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
    </View>
  );
}
