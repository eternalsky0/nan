import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NewsCardProps } from '../types/news';

export const NewsCard: React.FC<NewsCardProps> = ({ item, onPress }) => {
  const getBackgroundColor = () => {
    switch (item.type) {
      case 'water':
        return '#E3F2FD';
      case 'electricity':
        return '#FFF3E0';
      default:
        return '#F5F5F5';
    }
  };

  const getTimeText = () => {
    return item.date + ' с ' + item.timeStart + 
           (item.timeEnd === 'окончания работ' 
             ? ' до окончания работ' 
             : ' до ' + item.timeEnd);
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: getBackgroundColor() }]} 
      onPress={() => onPress(item)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        {item.address && (
          <Text style={styles.address} numberOfLines={2}>
            {item.address}
          </Text>
        )}
        <View style={styles.footer}>
          <Text style={styles.datetime}>{getTimeText()}</Text>
          <Text style={styles.more}>нажмите, чтобы узнать подробнее</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    marginTop: 8,
  },
  datetime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  more: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default NewsCard;
