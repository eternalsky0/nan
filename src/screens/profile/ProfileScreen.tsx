import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const menuItems = [
    {
      title: 'Настройки профиля',
      icon: 'person-outline',
      onPress: () => navigation.navigate('ProfileSettings'),
    },
    {
      title: 'Уведомления',
      icon: 'notifications-outline',
      onPress: () => navigation.navigate('NotificationSettings'),
    },
    {
      title: 'История обращений',
      icon: 'time-outline',
      onPress: () => navigation.navigate('RequestHistory'),
    },
    {
      title: 'О приложении',
      icon: 'information-circle-outline',
      onPress: () => navigation.navigate('AboutApp'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Профиль</Text>
      </View>

      <View style={styles.content}>
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <Ionicons name={item.icon} size={24} color="#333" />
            <Text style={styles.menuItemText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={24} color="#CCC" />
          </Pressable>
        ))}

        <Pressable
          style={[styles.menuItem, styles.logoutButton]}
          onPress={logout}
        >
          <Ionicons name="log-out-outline" size={24} color="#FF4444" />
          <Text style={[styles.menuItemText, styles.logoutText]}>
            Выйти из аккаунта
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  logoutButton: {
    marginTop: 24,
    backgroundColor: '#FFF5F5',
  },
  logoutText: {
    color: '#FF4444',
  },
});

export default ProfileScreen;
