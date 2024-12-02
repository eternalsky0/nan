import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  ScrollView,
  Linking 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AboutAppScreen = () => {
  const navigation = useNavigation();
  
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
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
        <Text style={styles.headerTitle}>О приложении</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.appName}>Коммунальные услуги</Text>
          <Text style={styles.version}>Версия 1.0.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Описание</Text>
          <Text style={styles.description}>
            Приложение для контроля и управления коммунальными услугами. 
            Отслеживайте отключения, передавайте показания счетчиков и получайте 
            уведомления о важных событиях.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Контакты</Text>
          <Pressable 
            style={styles.contactItem}
            onPress={() => handleLinkPress('tel:+78001234567')}
          >
            <Ionicons name="call-outline" size={20} color="#2196F3" />
            <Text style={styles.contactText}>8 (800) 123-45-67</Text>
          </Pressable>
          
          <Pressable 
            style={styles.contactItem}
            onPress={() => handleLinkPress('mailto:support@example.com')}
          >
            <Ionicons name="mail-outline" size={20} color="#2196F3" />
            <Text style={styles.contactText}>support@example.com</Text>
          </Pressable>
          
          <Pressable 
            style={styles.contactItem}
            onPress={() => handleLinkPress('https://example.com')}
          >
            <Ionicons name="globe-outline" size={20} color="#2196F3" />
            <Text style={styles.contactText}>www.example.com</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Документы</Text>
          <Pressable 
            style={styles.documentItem}
            onPress={() => handleLinkPress('https://example.com/terms')}
          >
            <Text style={styles.documentText}>Пользовательское соглашение</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>
          
          <Pressable 
            style={styles.documentItem}
            onPress={() => handleLinkPress('https://example.com/privacy')}
          >
            <Text style={styles.documentText}>Политика конфиденциальности</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>
        </View>
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
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#2196F3',
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  documentText: {
    fontSize: 16,
    color: '#000',
  },
});

export default AboutAppScreen;