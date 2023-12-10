// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen1 = ({ navigation }) => {

  useEffect(() => {
    // Simulate a 30-second delay
    const delay = 3000; // 30 seconds for demonstration purposes
    const timer = setTimeout(() => {
      // Navigate to the main part of your app after the delay
      navigation.replace('SplashScreen2'); // Replace with the actual name of your main screen
    }, delay);

    // Clear the timer if the component is unmounted before the delay is complete
    return () => clearTimeout(timer);
  }, [navigation]);
  

  const handleSkip = () => {
    // Navigate to the main part of your app when the "Skip" button is pressed
    navigation.replace('SplashScreen2'); // Replace with the actual name of your main screen
  };

  const handleNext = () => {
    // Navigate to the next screen when the "Next" button is pressed
    // Replace 'NextScreen' with the actual name of the next screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images (2).jpg')} style={styles.logo} />
      <Text style={styles.title}>Make Memories That Last a Lifetime</Text>
      <Text> Competition is fierce in the tourism industry for tour operators and activity providers as travelers are becoming savvier and the market is becoming more saturated. There are a plethora of review websites to peruse and niche blogs to pour-over
        </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:20     // Set your desired background color
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20,
    width: '100%',
    height: '60%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF', // Set your desired button color
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ff4000'
  },
  buttonText: {
    color: 'white', // Set your desired button text color
    fontWeight: 'bold',
    backgroundColor: '#ff4000'
    

  },
});

export default SplashScreen1;
