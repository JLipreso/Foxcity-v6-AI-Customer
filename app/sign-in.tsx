import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
// Removed: import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

// Removed: const theme = Colors.light;

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the hook for each color needed from the theme
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const inputBackgroundColor = useThemeColor({}, 'inputBackground');
  const primaryColor = useThemeColor({}, 'primary');
  const buttonTextColor = useThemeColor({}, 'buttonText');
  const accentColor = useThemeColor({}, 'accent'); // For input border

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    console.log('Attempting sign in with:', email, password);
    router.replace('/(main)');
  };

  const navigateToRegister = () => {
    router.push('/register');
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Sign In</Text>

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor, borderWidth: 1 }]}
        placeholder="Email"
        placeholderTextColor={textColor} // Use themed text color for placeholder
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor, borderColor: accentColor, borderWidth: 1 }]}
        placeholder="Password"
        placeholderTextColor={textColor} // Use themed text color for placeholder
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: primaryColor }]}
        onPress={handleSignIn}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={navigateToRegister}>
        <Text style={[styles.linkText, { color: primaryColor }]}>
          Don't have an account? Register
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
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    // borderWidth: 1, // Applied inline with themed borderColor
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
