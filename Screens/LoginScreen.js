import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../Hooks/useAuth";

const LoginScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
              onPress={() => { }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
