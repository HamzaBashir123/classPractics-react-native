import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import {createUserWithEmailAndPassword, auth,} from '../firebaseConfig.js'

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(email,password )

  const handleSignup = () => {
    // Perform signup logic here (e.g., API calls, authentication)

    // Example validation - Check if email and password are not empty
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    else{
        Alert.alert('Signup Details', `Email: ${email}\nPassword: ${password}`);
        // Reset the input fields after signup
        setEmail('');
        setPassword('');
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setEmail("")
          setFirstName("")
          setPassword("")
          setLastName("")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         alert(errorCode)
        });

    }
    // Example: Displaying the entered email and password
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        autoCapitalize="none"
      />
         <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignupPage;