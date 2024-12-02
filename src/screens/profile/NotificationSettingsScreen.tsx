import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  Switch,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  key: string;
}

const notificationSettings: NotificationSetting[] = [
  {
    id: '1',
    title: 'Уведомления для происшествий всего города',
    description: 'Получать уведомления о плановых и аварийных работах по всему городу',
    key: 'cityWide'
  },
  {
    id: '2',
    title: 'Уведомления для происшествий своего дома',
    description: 'Получать уведомления только о работах, затрагивающих ваш дом',
    key: 'homeOnly'
  },
  {
    id: '3',
    title: 'Push-уведомления',
    description: 'Получать мгновенные уведомления на телефон',
    key: 'push'
  },
  {
    id: '4',
    title: 'Email-уведомления',
    description: 'Получать уведомления на электронную почту',
    key: 'email'
  }
];

const NotificationSettingsScreen = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState<Record<string, boolean>>({
    cityWide: false,
    homeOnly: true,
    push: true,
    email: false,
  });

  const toggleSwitch = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
          <Text style={styles.backText}>Назад</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Настройки уведомлений</Text>
      </View>

      <ScrollView style={styles.content}>
        {notificationSettings.map(setting => (
          <View key={setting.id} style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{setting.title}</Text>
              <Text style={styles.settingDescription}>{setting.description}</Text>
            </View>
            <Switch
              trackColor={{ false: '#E0E0E0', true: '#90CAF9' }}
              thumbColor={settings[setting.key] ? '#2196F3' : '#f4f3f4'}
              onValueChange={() => toggleSwitch(setting.key)}
              value={settings[setting.key]}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationSettingsScreen;
