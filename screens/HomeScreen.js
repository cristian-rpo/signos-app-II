import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
