import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styles from "../styles/LoginStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>signos</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user-astronaut" size={50} color="black" />
        <Text style={styles.caption}>
          Inicia sesión o registrate en signos, la app de lengua de señas
          Colombiana.
        </Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
