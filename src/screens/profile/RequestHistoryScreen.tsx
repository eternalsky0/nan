import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface Request {
  id: string;
  title: string;
  date: string;
  status: 'pending' | 'inProgress' | 'completed' | 'rejected';
  response?: string;
}

const mockRequests: Request[] = [
  {
    id: '1',
    title: 'Отключение горячей воды',
    date: '15.10.2024',
    status: 'completed',
    response: 'Работы выполнены по графику'
  },
  {
    id: '2',
    title: 'Проблема с отоплением',
    date: '12.10.2024',
    status: 'inProgress',
  },
  {
    id: '3',
    title: 'Перебои с электричеством',
    date: '10.10.2024',
    status: 'pending',
  },
];

const getStatusText = (status: Request['status']) => {
  switch (status) {
    case 'pending':
      return 'Ожидает рассмотрения';
    case 'inProgress':
      return 'В работе';
    case 'completed':
      return 'Выполнено';
    case 'rejected':
      return 'Отклонено';
    default:
      return status;
  }
};

const getStatusColor = (status: Request['status']) => {
  switch (status) {
    case 'pending':
      return '#FFA000';
    case 'inProgress':
      return '#2196F3';
    case 'completed':
      return '#4CAF50';
    case 'rejected':
      return '#F44336';
    default:
      return '#999';
  }
};

const RequestHistoryScreen = () => {
  const navigation = useNavigation();

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
        <Text style={styles.headerTitle}>История обращений</Text>
      </View>

      <ScrollView style={styles.content}>
        {mockRequests.map(request => (
          <View key={request.id} style={styles.requestCard}>
            <View style={styles.requestHeader}>
              <Text style={styles.requestTitle}>{request.title}</Text>
              <Text style={styles.requestDate}>{request.date}</Text>
            </View>
            
            <View style={styles.statusContainer}>
              <View 
                style={[
                  styles.statusBadge, 
                  { backgroundColor: getStatusColor(request.status) + '20' }
                ]}
              >
                <Text style={[
                  styles.statusText,
                  { color: getStatusColor(request.status) }
                ]}>
                  {getStatusText(request.status)}
                </Text>
              </View>
            </View>

            {request.response && (
              <View style={styles.responseContainer}>
                <Text style={styles.responseLabel}>Ответ:</Text>
                <Text style={styles.responseText}>{request.response}</Text>
              </View>
            )}
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
    padding: 16,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  requestDate: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  responseContainer: {
    marginTop: 8,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  responseLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  responseText: {
    fontSize: 14,
    color: '#666',
  },
});

export default RequestHistoryScreen;
