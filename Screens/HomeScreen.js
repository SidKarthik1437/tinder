import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
    const tailwind = useTailwind();
    const navigation = useNavigation()


  return (
    <SafeAreaView>
          <Text>HomeScreen</Text>
          <Button title="Goto Chat Screen" onPress={() => navigation.navigate('Chat')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
