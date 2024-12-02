import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitch = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surface }]}>
      <Text style={[styles.text, { color: theme.text }]}>Темная тема</Text>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: '#E0E0E0', true: theme.primary + '50' }}
        thumbColor={isDark ? theme.primary : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
  },
});

export default ThemeSwitch;