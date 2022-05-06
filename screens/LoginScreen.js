import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";
import styles from "../styles/LoginStyles";
import React from "react";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>signos</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome5 style={styles.mainIcon} name="user-astronaut" size={50} />

        <Text style={styles.caption}>
          Inicia sesión o registrate en signos, la app de lengua de señas
          Colombiana.
        </Text>

        <View style={styles.inputBox}>
          <FontAwesome5 style={styles.inputIcon} name="user-alt" size={18} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome5
            style={styles.inputIcon}
            name="lock"
            size={18}
            color={"red"}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            textContentType="password"
          />
          <FontAwesome5 name="eye" size={18} />
        </View>
        <Text style={styles.forgot}>¿Olvidaste la contraseña?</Text>
        <Button label="Iniciar sesión" type="active" />
        <Button label="Registrarme" type="alt" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
