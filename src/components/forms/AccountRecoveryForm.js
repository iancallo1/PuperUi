import React, { useState } from "react";
import { View, TextInput, Text} from "react-native";
import { Button} from "react-native-paper";

export default function AccountRecoveryForm({ onSendCode, onGoBack }) {
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    // Perform any validation if needed
    // Call the onSendCode function with the email
    onSendCode(email);
  };

  return (
    <View>
    
      <TextInput
        mode="outlined"
        label="Enter your email"
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginTop: 10 , marginBottom: 20, paddingLeft: 10,backgroundColor: "white"}}
      />
      <Button mode="contained" buttonColor="rgba(255, 106, 0, 0.8)" onPress={handleSendCode}>
        Send Code
      </Button>
      <Button onPress={onGoBack}>Go Back</Button>
    </View>
  );
}
