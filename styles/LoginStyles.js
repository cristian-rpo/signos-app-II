import { StyleSheet } from "react-native";
import React from "react";
import colors from "./colors";
import fonts from "./fonts";

// //Fonts
// const nunitoRegular = "Nunito_400Regular";
// const comfortaaBold = "Comfortaa_700Bold";

// //Font sizes

// //Colors
// const primary = "#4585EE";
// const secondary = "#162744";
// const alt = "#C6C6C6";
// const black = "#343A40";
// const white = "#FFFFFF";

const LoginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 140,
  },
  titleText: {
    fontFamily: fonts.confortaa,
    fontSize: 70,
    textShadowColor: "rgba(0, 0, 0, 0.30)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    color: colors.white,
  },
  iconContainer: {
    display: "flex",
    width: 90,
    height: 90,
    overflow: "hidden",
    borderRadius: 100,
    marginTop: -60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 9,
  },
  mainIcon: {
    color: colors.white,
  },
  caption: {
    marginTop: "5%",
    fontFamily: fonts.nunito,
    fontSize: 18,
    color: colors.black,
  },
  inputContainer: {
    flex: 3,
    display: "flex",
    backgroundColor: colors.white,
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 50,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  inputBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  input: {
    fontFamily: fonts.nunito,
    flex: 1,
    color: colors.secondary,
    borderBottomColor: colors.alt,
    borderBottomWidth: 2,
    borderBottomColor: colors.alt,
  },
  inputIcon: {
    color: colors.alt,
    marginRight: "5%",
  },
  forgot: {
    fontFamily: fonts.nunito,
    color: colors.primary,
    alignSelf: "flex-end",
    marginTop: 5,
    marginRight: 5,
    textDecorationLine: "underline",
    marginBottom: "5%",
  },
});
export default LoginStyles;
