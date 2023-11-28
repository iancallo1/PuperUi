import { View,StyleSheet,ImageBackground } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  const { navigation } = props;

  const handleForgotPassword = () => {
    // Navigate to the AccountRecovery screen
    navigation.navigate("Recover");
  };

  const handleLoginSuccess = () => {
    // Navigate to the Home screen upon successful login
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
    source={require("../images/ham2.png")}
    style={styles.backgroundImage}
  >
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <LoginForm onLogin={handleLoginSuccess} navigation={navigation} />
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
      <Button onPress={handleForgotPassword}>Forgot Password?</Button>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
});