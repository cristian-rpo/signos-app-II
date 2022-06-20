import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/LoginStyles";

const MainContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainContainer;
