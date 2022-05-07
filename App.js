import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appStyles } from "./styles/globalStyles";
import "./styles/colors";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen";
import Homecreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent />
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Nunito-Regular",
    fontSize: 70,
  },
});
