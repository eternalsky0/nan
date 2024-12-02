import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackParamList } from '../../navigation/AppNavigator';
import { ShutdownType } from '../../types/news';

type DetailScreenRouteProp = RouteProp<HomeStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Detail'>;

const getStatusText = (status: ShutdownType['status']) => {
  switch (status) {
    case 'scheduled':
      return 'Запланировано';
    case 'active':
      return 'В процессе';
    case 'completed':
      return 'Завершено';
    default:
      return '';
  }
};

const getStatusColor = (status: ShutdownType['status']) => {
  switch (status) {
    case 'scheduled':
      return '#FFA726';
    case 'active':
      return '#EF5350';
    case 'completed':
      return '#66BB6A';
    default:
      return '#999';
  }
};

const DetailScreen = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { shutdown } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
          <Text style={styles.backText}>назад</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Подробнее</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>{shutdown.title}</Text>
          
          <View style={styles.statusContainer}>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(shutdown.status) }]}>
              <Text style={styles.statusText}>{getStatusText(shutdown.status)}</Text>
            </View>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Дата:</Text>
            <Text style={styles.info}>{shutdown.date}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Время:</Text>
            <Text style={styles.info}>
              с {shutdown.timeStart}
              {shutdown.timeEnd !== 'окончания работ' 
                ? ' до ' + shutdown.timeEnd
                : ' до окончания работ'
              }
            </Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Адрес:</Text>
            <Text style={styles.info}>{shutdown.address}</Text>
          </View>

          {shutdown.details && shutdown.details.length > 0 && (
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Затронутые дома:</Text>
              {shutdown.details.map((detail, index) => (
                <Text key={index} style={styles.addressDetail}>
                  • {detail}
                </Text>
              ))}
            </View>
          )}

          {shutdown.description && (
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Причина:</Text>
              <Text style={styles.info}>{shutdown.description}</Text>
            </View>
          )}
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
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statusContainer: {
    marginBottom: 16,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  infoBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  addressDetail: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
    marginBottom: 4,
    lineHeight: 22,
  },
});

export default DetailScreen;
