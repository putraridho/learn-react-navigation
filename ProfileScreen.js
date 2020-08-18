import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function ProfileScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
