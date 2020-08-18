import React, { useState } from "react";
import { TextInput, Button } from "react-native";

export default function CreatePostScreen({ navigation }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
}
