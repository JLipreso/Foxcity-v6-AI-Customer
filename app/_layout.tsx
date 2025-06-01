import { ThemeProvider } from '@react-navigation/native'; // Keep this
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors'; // Import your Colors

// Create custom navigation themes
// These themes adapt our application's color palette (Colors.ts)
// to the structure expected by React Navigation's ThemeProvider.
const MyLightTheme = {
  dark: false, // Identifies this as a light theme
  colors: {
    primary: Colors.light.primary,       // Primary color for the app (used for tinting elements)
    background: Colors.light.background, // Background color for screens
    card: Colors.light.primary,          // Background color for card-like elements (e.g., headers)
    text: Colors.light.buttonText,       // Text color for elements on card background (e.g., header title)
    border: Colors.light.accent,         // Border color for elements like headers or tabs
    notification: Colors.light.primary,  // Color for notification dots/badges (can be same as primary)
  },
};

const MyDarkTheme = {
  dark: true, // Identifies this as a dark theme
  colors: {
    primary: Colors.dark.primary,
    background: Colors.dark.background,
    card: Colors.dark.primary,          // Header background for dark theme
    text: Colors.dark.buttonText,        // Header text for dark theme
    border: Colors.dark.accent,
    notification: Colors.dark.primary,
  },
};


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // React Navigation uses a hook under the hood for mounting the provider.
  // We need to ensure that the font is loaded before the provider is mounted.
  // See https://github.com/expo/router/issues/783
  const [isFontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    if (loaded) {
      setFontLoaded(true);
    }
  }, [loaded]);

  if (!isFontLoaded) {
    return null;
  }

  // Select the active theme based on the system's color scheme
  const activeTheme = colorScheme === 'dark' ? MyDarkTheme : MyLightTheme;

  return (
    <ThemeProvider value={activeTheme}>
      <Stack initialRouteName="sign-in">
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            title: 'Create Account',
            // Header styles are now primarily driven by the ThemeProvider.
            // Specific overrides can be done here if needed, but for consistency,
            // it's better to rely on the theme definition.
            // e.g., headerStyle: { backgroundColor: activeTheme.colors.card }
            // headerTintColor: activeTheme.colors.text
            // These are now implicitly set by the ThemeProvider's `value`.
          }}
        />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* Adjust StatusBar style based on the active theme */}
      {/* Colors.light.statusBar was 'dark', Colors.dark.statusBar was 'light' */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
