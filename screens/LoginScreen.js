import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";
import styles from "../styles/LoginStyles";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        alert;
      })
      .catch((error) => Alert.alert(error.message));
  };

  return (
    <View style={styles.container}>
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
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome5 style={styles.inputIcon} name="lock" size={18} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            textContentType="password"
            enablesReturnKeyAutomatically
            onChangeText={(text) => setPassword(text)}
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
        <Button label="Registrarme" type="alt" action={handleSignUp} />
      </View>
    </View>
  );
};

export default LoginScreen;
