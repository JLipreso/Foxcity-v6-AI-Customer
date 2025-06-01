import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
// Removed: import { Colors } from '@/constants/Colors';
import ServiceCard from '@/components/common/ServiceCard';
import { useThemeColor } from '@/hooks/useThemeColor';

// Removed: const theme = Colors.light;

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const accentColor = useThemeColor({}, 'accent'); // For banner background
  const bannerTextColor = useThemeColor({}, 'buttonText'); // For text on accent background

  const services = [
    { title: 'Food Delivery', route: '/(main)/food-delivery' },
    { title: 'Ride Hailing', route: '/(main)/ride-hailing' },
    { title: 'Grocery', route: '/(main)/grocery' },
    { title: 'On-call Services', route: '/(main)/on-call-services' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={[styles.banner, { backgroundColor: accentColor }]}>
        <Text style={[styles.bannerText, { color: bannerTextColor }]}>Banner Placeholder</Text>
      </View>

      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            onPress={() => router.push(service.route as any)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 24,
    // color: theme.buttonText, // Applied inline
    fontWeight: 'bold',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
});
