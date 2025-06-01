import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
// Removed: import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

// Removed: const theme = Colors.light;

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  // Use the hook for each color needed from the theme
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const inputBackgroundColor = useThemeColor({}, 'inputBackground');
  const primaryColor = useThemeColor({}, 'primary');
  const buttonTextColor = useThemeColor({}, 'buttonText');
  const accentColor = useThemeColor({}, 'accent'); // For input border

  const handleRegister = () => {
    if (!name || !email || !mobile || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    console.log('Attempting registration for:', name, email, mobile);
    Alert.alert('Success', 'Registration successful!', [
      { text: 'OK', onPress: () => router.push('/sign-in') }
    ]);
  };

  const navigateToSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Create Account</Text>

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor }]}
        placeholder="Name"
        placeholderTextColor={textColor}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor }]}
        placeholder="Email"
        placeholderTextColor={textColor}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor }]}
        placeholder="Mobile Number"
        placeholderTextColor={textColor}
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor }]}
        placeholder="Password"
        placeholderTextColor={textColor}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: primaryColor }]}
        onPress={handleRegister}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={navigateToSignIn}>
        <Text style={[styles.linkText, { color: primaryColor }]}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
  },
});
