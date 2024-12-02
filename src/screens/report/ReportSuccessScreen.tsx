import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { ReportStackParamList } from '../../types/report';

type ReportSuccessNavigationProp = StackNavigationProp<ReportStackParamList, 'ReportSuccess'>;

const ReportSuccessScreen = () => {
 const navigation = useNavigation<ReportSuccessNavigationProp>();

 const handleBackToMain = () => {
   navigation.navigate('ReportMain');
 };

 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.content}>
       <View style={styles.iconContainer}>
         <Ionicons name="checkmark-circle-outline" size={80} color="#4CAF50" />
       </View>
       <Text style={styles.title}>Сообщение отправлено</Text>
       <Text style={styles.message}>
         Спасибо за обращение! Мы получили ваше сообщение и уже работаем над решением проблемы.
       </Text>
       <Pressable 
         style={styles.button}
         onPress={handleBackToMain}
       >
         <Text style={styles.buttonText}>Вернуться на главную</Text>
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
 content: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 24,
 },
 iconContainer: {
   marginBottom: 24,
 },
 title: {
   fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 16,
   textAlign: 'center',
 },
 message: {
   fontSize: 16,
   color: '#666',
   textAlign: 'center',
   marginBottom: 32,
   lineHeight: 24,
 },
 button: {
   backgroundColor: '#2196F3',
   paddingHorizontal: 24,
   paddingVertical: 12,
   borderRadius: 8,
 },
 buttonText: {
   color: '#fff',
   fontSize: 16,
   fontWeight: '600',
 },
});

export default ReportSuccessScreen;
