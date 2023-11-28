import React from "react";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
import { Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
    const navigation = useNavigation();
  
    const handleLogout = () => {
      // Add logic for handling logout
      // For example, you might clear authentication state and navigate back to login
      console.log("Logout clicked");
      // Navigate back to the Login page
      navigation.navigate("Login");
    };
  
    return (
      <ImageBackground
        source={require("../images/humurger2.png")}
        style={styles.backgroundImage}
      >
        <Appbar.Header>
          <Appbar.Action icon="logout" onPress={handleLogout} />
        </Appbar.Header>
  
        <View style={styles.content}>
          <Text></Text>
          {/* Your home page content goes here */}
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "cover", // or "stretch"
    },
    content: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });