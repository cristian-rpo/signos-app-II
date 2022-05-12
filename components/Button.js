import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import React from "react";

const Button = ({ label, type, action }) => {
  const styles = StyleSheet.create({
    active: {
      width: "100%",
      marginBottom: "5%",
      height: 50,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.19,
      shadowRadius: 5.62,
      elevation: 6,
    },
    alt: {
      width: "100%",
      marginBottom: "5%",
      height: 50,
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      borderWidth: 1,
      borderColor: colors.primary,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.19,
      shadowRadius: 5.62,
      elevation: 6,
    },
    label: {
      fontFamily: fonts.nunito,
      fontSize: 20,
      color: colors[type == "active" ? "white" : "primary"],
    },
  });

  return (
    <TouchableOpacity style={styles[type]} onPress={action}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
