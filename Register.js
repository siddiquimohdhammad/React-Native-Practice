import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill all the fields');
      return;
    }

    try {
      const response = await fetch('http://172.16.1.81:5000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
  
      console.log('Response Status:', response.status);  // Log the response status
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);  // Log the response data
        Alert.alert('Registration Successful');
        setName('');
        setEmail('');
        setPassword('');
        navigation.navigate('Home')
      } else {
        const data = await response.json();
        console.log('Error Response:', data);  // Log the error response
        Alert.alert('Registration Failed', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.log('Error:', error);  // Log any other errors
      Alert.alert('Error', 'Failed to register');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Register Screen</Text>

      <TextInput
        style={styles.inp}
        placeholder='Enter Name'
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.inp}
        placeholder='Enter Email'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.inp}
        placeholder='Enter Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerButton}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  txt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inp: {
    color: 'white',
    backgroundColor: 'grey',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  registerButton: {
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 25,
    fontSize: 15,
    backgroundColor: 'blue',
    padding: 10,
    color: 'white',
  },
});
