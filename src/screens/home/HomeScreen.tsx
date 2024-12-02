import React from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../context/ThemeContext';
import NewsCard from '../../components/NewsCard';
import type { HomeStackParamList } from '../../navigation/AppNavigator';
import type { ShutdownType } from '../../types/news';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

const mockShutdowns: ShutdownType[] = [
  {
    id: '1',
    title: 'Отключение воды',
    address: 'пер. Водников, ул. Р. Люксембург',
    date: '20.10.2024',
    timeStart: '17:30',
    timeEnd: '20:00',
    type: 'water',
    status: 'scheduled',
  },
  {
    id: '2',
    title: 'Отключение горячей воды',
    address: 'ул. Партизанская, ул. Орджоникидзе, ул. Мусинского, ул. Кировская, ул. Красных маршалов',
    date: '18.10.2024',
    timeStart: '10:30',
    timeEnd: 'окончания работ',
    type: 'water',
    status: 'active',
    details: [
      'ул. Партизанская 37, 39, 41, 43',
      'ул. Орджоникидзе 3/1, 5/1, 13, 17, 19',
      'ул. Мусинского 19 21, 23, 25, 27',
      'ул. Кировская 10, 23, 23/1'
    ]
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { theme } = useTheme();
  const [myAddress, setMyAddress] = React.useState('');

  const handleCardPress = (shutdown: ShutdownType) => {
    navigation.navigate('Detail', { shutdown });
  };

  const handleAddressPress = () => {
    navigation.navigate('ProfileStack', { screen: 'ProfileSettings' });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Text style={[styles.title, { color: theme.text }]}>Главная</Text>
        <Pressable onPress={handleAddressPress}>
          <Text style={[styles.addressButton, { color: theme.primary }]}>
            {myAddress || 'Мой адрес'}
          </Text>
        </Pressable>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.shutdownsList}>
          {mockShutdowns.map(shutdown => (
            <NewsCard
              key={shutdown.id}
              item={shutdown}
              onPress={() => handleCardPress(shutdown)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addressButton: {
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  shutdownsList: {
    padding: 8,
  },
});

export default HomeScreen;
