import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Pressable 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface ServiceItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  isAvailable: boolean;
}

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Показания счетчиков',
    icon: 'speedometer-outline',
    description: 'Передача показаний счетчиков воды и электричества',
    isAvailable: true,
  },
  {
    id: '2',
    title: 'Оплата услуг',
    icon: 'card-outline',
    description: 'Оплата коммунальных услуг онлайн',
    isAvailable: false,
  },
  {
    id: '3',
    title: 'Заявки на ремонт',
    icon: 'construct-outline',
    description: 'Заявки на ремонт и обслуживание',
    isAvailable: true,
  },
  {
    id: '4',
    title: 'История платежей',
    icon: 'document-text-outline',
    description: 'История платежей и квитанции',
    isAvailable: false,
  }
];

const ServiceScreen = () => {
  const handleServicePress = (service: ServiceItem) => {
    if (!service.isAvailable) {
      // Показать сообщение о недоступности сервиса
      return;
    }
    
    // Навигация к соответствующему сервису
    console.log(`Navigate to service: ${service.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Сервисы</Text>
          
          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <Pressable
                key={service.id}
                style={[
                  styles.serviceCard,
                  !service.isAvailable && styles.serviceCardDisabled
                ]}
                onPress={() => handleServicePress(service)}
              >
                <View style={styles.iconContainer}>
                  <Ionicons 
                    name={service.icon} 
                    size={24} 
                    color={service.isAvailable ? '#2196F3' : '#999'} 
                  />
                </View>
                <Text style={[
                  styles.serviceTitle,
                  !service.isAvailable && styles.serviceTitleDisabled
                ]}>
                  {service.title}
                </Text>
                <Text style={[
                  styles.serviceDescription,
                  !service.isAvailable && styles.serviceDescriptionDisabled
                ]}>
                  {service.description}
                </Text>
                {!service.isAvailable && (
                  <View style={styles.unavailableBadge}>
                    <Text style={styles.unavailableText}>Скоро</Text>
                  </View>
                )}
              </Pressable>
            ))}
          </View>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  servicesGrid: {
    gap: 16,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  serviceCardDisabled: {
    opacity: 0.8,
    backgroundColor: '#f5f5f5',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  serviceTitleDisabled: {
    color: '#999',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  serviceDescriptionDisabled: {
    color: '#999',
  },
  unavailableBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  unavailableText: {
    fontSize: 12,
    color: '#FF4444',
    fontWeight: '500',
  },
});

export default ServiceScreen;