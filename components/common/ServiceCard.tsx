import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// Removed: import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

// Removed: const theme = Colors.light;

interface ServiceCardProps {
  title: string;
  onPress: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 20 - 20) / 2;

export default function ServiceCard({ title, onPress }: ServiceCardProps) {
  const cardBackgroundColor = useThemeColor({}, 'card');
  const primaryTextColor = useThemeColor({}, 'primary'); // For card text

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { backgroundColor: cardBackgroundColor }]}
    >
      <Text style={[styles.cardText, { color: primaryTextColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: theme.card, // Applied inline
    width: cardWidth,
    height: cardWidth * 0.8,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000', // Shadow color can be static or also themed if needed
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: theme.primary, // Applied inline
    textAlign: 'center',
  },
});
