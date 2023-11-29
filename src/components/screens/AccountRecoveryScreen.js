import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import AccountRecoveryForm from "../forms/AccountRecoveryForm";
import { useNavigation } from "@react-navigation/native";

export default function AccountRecovery() {
  const navigation = useNavigation();

  const handleSendCode = (email) => {
    // Add logic to send code to the entered email
    console.log(`Sending code to ${email}`);
    // You can add your code sending logic here
  };

  const handleGoBack = () => {
    // Handle the "Go Back" button press
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../images/4.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Account Recovery</Text>

        <AccountRecoveryForm onSendCode={handleSendCode} onGoBack={handleGoBack} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
