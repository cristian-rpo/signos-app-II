import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import React from "react";

const Button = ({ text, color }) => {
  console.log(color);
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.color,
    color: colors.white,
  },
});
