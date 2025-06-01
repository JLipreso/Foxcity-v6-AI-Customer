import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Removed: import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

// Removed: const theme = Colors.light;

export default function OnCallServicesScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>On-call Services Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
