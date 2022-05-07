import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import styles from "../styles/LoginStyles";
import React, { useState, useEffect } from "react";

const LoginScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View behavior="height" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>signos</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            style={styles.mainIcon}
            name="user-astronaut"
            size={50}
          />
          {/* <MaterialCommunityIcons name="face-man" size={24} color="black" /> */}
        </View>

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
            textContentType="password"
            enablesReturnKeyAutomatically
            secureTextEntry={showPassword ? false : true}
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <FontAwesome5 name={showPassword ? "eye-slash" : "eye"} size={18} />
          </TouchableOpacity>
        </View>

        <Text style={styles.forgot}>¿Olvidaste la contraseña?</Text>

        <Button label="Iniciar sesión" type="active" />
        <Button label="Registrarme" type="alt" />
      </View>
    </View>
  );
};

export default LoginScreen;
