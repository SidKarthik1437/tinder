import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";

const ChatScreen = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind("flex-1 justify-center items-center")}>
      <Text>ChatScreen</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;
