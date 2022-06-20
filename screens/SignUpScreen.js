import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/LoginStyles";
import Card from "../components/Card";
import MainContainer from "../components/MainContainer";
import BackButton from "../components/BackButton";

const SignUpScreen = ({ navigation }) => {
  return (
    <MainContainer /*children={<Card />}*/>
      <BackButton navigation={navigation} />
      <Card />
    </MainContainer>
  );
};

export default SignUpScreen;
