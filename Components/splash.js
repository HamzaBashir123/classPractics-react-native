
// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignupPage from './SignUp'
import { Image } from 'react-native-web';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a 30-second delay
    const delay = 1000; // 30 seconds in milliseconds
    const timer = setTimeout(() => {
      // Navigate to the main part of your app after the delay
      navigation.replace('SplashScreen0'); // Replace with the actual name of your main screen
    }, delay);

    // Clear the timer if the component is unmounted before the delay is complete
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
       <Image source={require('../assets/icons8-location-48.png')} style={styles.logo} />
      <Text style={styles.title}>TourPlace</Text>
      {/* Add any other splash screen UI components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4000', // Set your desired background color
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default SplashScreen;
