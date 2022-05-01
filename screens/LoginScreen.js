import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native";
import LoginStyles from "../styles/LoginStyles";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={LoginStyles.container}>
      <View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" secureTextEntry />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
