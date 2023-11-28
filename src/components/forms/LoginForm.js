import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);

  const handleLogin = () => {
    
     {
      onLogin();
    }
  };
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <Button 
      onPress={() => navigation.navigate("Home") }
      icon="login" 
      mode="contained" 
      style={{ marginTop: 10 }}
      
      >
          
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
    </View>
  );
}
