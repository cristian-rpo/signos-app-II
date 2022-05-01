import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView styles={styles.container} behavior="padding">
      <View>
        <Text>Login Screen</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
