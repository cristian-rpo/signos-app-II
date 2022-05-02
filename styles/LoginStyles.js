import { StyleSheet } from "react-native";
import React from "react";

//Fonts
const nunitoRegular = "Nunito_400Regular";
const comfortaaBold = "Comfortaa_700Bold";

//Font sizes

//Colors
const primary = "#4585EE";
const secondary = "#162744";
const alt = "#C6C6C6";
const black = "#343A40";
const white = "#FFFFFF";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: comfortaaBold,
    fontSize: 70,
    color: white,
  },
  inputContainer: {
    flex: 3,
    display: "flex",
    backgroundColor: white,
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 50,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  input: {
    borderBottomColor: "#B7B7B7",
  },
  caption: {
    fontFamily: nunitoRegular,
    fontSize: 18,
    color: alt,
  },
  //   view: {},
  //   text: {},
});
export default LoginStyles;
