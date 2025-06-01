import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';

const theme = Colors.light; // Or use useColorScheme to make it dynamic

export default function MainAppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: theme.buttonText, // Color for back button and title
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      {/* Ensure HomeScreen header is also styled or explicitly shown if needed. */}
      {/* For app/(main)/index.tsx, if we want a header, it should be configured here. */}
      {/* If HomeScreen (index) should not have a header from this stack, options={{ headerShown: false }} */}
      {/* Let's assume 'Home' title is desired for the index screen of this stack. */}

      <Stack.Screen name="food-delivery" options={{ title: 'Food Delivery' }} />
      <Stack.Screen name="ride-hailing" options={{ title: 'Ride Hailing' }} />
      <Stack.Screen name="grocery" options={{ title: 'Grocery' }} />
      <Stack.Screen name="on-call-services" options={{ title: 'On-call Services' }} />
    </Stack>
  );
}
