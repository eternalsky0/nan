import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ServiceCard = ({ service, onPress }) => {
  const { theme } = useTheme();

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        pressed && { backgroundColor: theme.cardPressed }
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>{service.title}</Text>
        <Text style={[styles.address, { color: theme.textSecondary }]}>
          {service.address}
        </Text>
        <Text style={[styles.time, { color: theme.textSecondary }]}>
          {service.date} {service.timeStart} - {service.timeEnd}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
  },
});

export default ServiceCard;