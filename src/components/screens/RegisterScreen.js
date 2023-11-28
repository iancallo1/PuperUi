import { View,StyleSheet,ImageBackground } from "react-native";
import React from "react";
import SignupForm from "../forms/SignupForm";

export default function RegisterScreen(props) {
  return (
    <ImageBackground
    source={require("../images/ham1.png")}
    style={styles.backgroundImage}
  >
    
    <View style={{ flex: 1, padding: 20 }}>
      <SignupForm {...props} />
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