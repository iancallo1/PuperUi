import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../images/fries.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    marginBottom: 150,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'rgba(0, 128, 255, 0.8)',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'rgba(255, 165, 0, 0.8)',
  },
  separator: {
    height: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
