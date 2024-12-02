import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { ReportStackParamList } from '../../types/report';

type ReportScreenNavigationProp = StackNavigationProp<ReportStackParamList, 'ReportMain'>;

const ReportMainScreen = () => {
  const navigation = useNavigation<ReportScreenNavigationProp>();

  const handleTypeSelect = (type: 'water' | 'electricity' | 'other') => {
    navigation.navigate('ReportDetails', { type });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Сообщить о проблеме</Text>
      </View>

      <View style={styles.content}>
        <Pressable 
          style={styles.optionButton} 
          onPress={() => handleTypeSelect('water')}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="water-outline" size={24} color="#2196F3" />
          </View>
          <Text style={styles.optionText}>Отключили воду</Text>
        </Pressable>

        <Pressable 
          style={styles.optionButton} 
          onPress={() => handleTypeSelect('electricity')}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="flash-outline" size={24} color="#2196F3" />
          </View>
          <Text style={styles.optionText}>Отключили свет</Text>
        </Pressable>

        <Pressable 
          style={styles.optionButton} 
          onPress={() => handleTypeSelect('other')}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="alert-circle-outline" size={24} color="#2196F3" />
          </View>
          <Text style={styles.optionText}>Другое</Text>
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
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ReportMainScreen;
