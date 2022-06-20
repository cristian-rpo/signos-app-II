import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
