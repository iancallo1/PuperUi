import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function AccountRecovery() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    // Add logic to send code to the entered email
    console.log(`Sending code to ${email}`);
    // You can add your code sending logic here
  };

  return (
    <ImageBackground
      source={require('../images/4.png')}
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <PaperButton mode="contained" onPress={handleSendCode}>
        Send Code
      </PaperButton>

      <PaperButton onPress={() => navigation.goBack()}>Go Back</PaperButton>
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
