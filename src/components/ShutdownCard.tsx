import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

// Определяем интерфейс для данных об отключении
interface Shutdown {
  id: string;
  title: string;
  address: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  details?: string[];
  type: 'water' | 'hotWater' | 'electricity' | 'gas' | 'heating';
  status: 'active' | 'scheduled' | 'completed';
}

interface ShutdownCardProps {
  shutdown: Shutdown;
  onPress: (shutdown: Shutdown) => void;
}

const ShutdownCard: React.FC<ShutdownCardProps> = ({ shutdown, onPress }) => {
  // Получаем стиль фона в зависимости от статуса
  const getBackgroundColor = () => {
    switch (shutdown.status) {
      case 'active':
        return '#FFE0E0'; // Легкий красный для активных
      case 'scheduled':
        return '#E3F2FD'; // Легкий синий для запланированных
      case 'completed':
        return '#E8F5E9'; // Легкий зеленый для завершенных
      default:
        return '#F5F5F5';
    }
  };

  return (
    <Pressable 
      style={[styles.container, { backgroundColor: getBackgroundColor() }]}
      onPress={() => onPress(shutdown)}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{shutdown.title}</Text>
        </View>

        <Text style={styles.address}>{shutdown.address}</Text>

        <View style={styles.footer}>
          <Text style={styles.timeInfo}>
            {shutdown.date} с {shutdown.timeStart}
            {shutdown.timeEnd !== 'окончания работ' 
              ? ` до ${shutdown.timeEnd}`
              : ' до окончания работ'
            }
          </Text>

          {shutdown.details && (
            <Text style={styles.detailsHint}>
              нажмите, чтобы узнать подробнее
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  content: {
    padding: 16,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  address: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    marginTop: 4,
  },
  timeInfo: {
    fontSize: 14,
    color: '#666',
  },
  detailsHint: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    fontStyle: 'italic',
  },
});

export default ShutdownCard;