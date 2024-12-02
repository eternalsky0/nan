import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { ReportStackParamList, ReportFormType } from '../../types/report';

type ReportDetailsRouteProp = RouteProp<ReportStackParamList, 'ReportDetails'>;
type ReportDetailsNavigationProp = StackNavigationProp<ReportStackParamList, 'ReportDetails'>;

const ReportDetailsScreen = () => {
  const navigation = useNavigation<ReportDetailsNavigationProp>();
  const route = useRoute<ReportDetailsRouteProp>();
  const { type } = route.params;

  const [formData, setFormData] = useState<Partial<ReportFormType>>({
    type,
    location: undefined,
    apartmentNumber: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.location) {
      newErrors.location = 'Выберите место отключения';
    }
    if (formData.location === 'apartment' && !formData.apartmentNumber) {
      newErrors.apartmentNumber = 'Введите номер квартиры';
    }
    if (!formData.phone) {
      newErrors.phone = 'Введите номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Здесь будет отправка данных на сервер
      navigation.navigate('ReportSuccess');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <View style={styles.header}>
          <Pressable 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
            <Text style={styles.backText}>назад</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Детали проблемы</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.form}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Где произошло отключение?</Text>
              <View style={styles.radioGroup}>
                <Pressable 
                  style={[
                    styles.radioButton,
                    formData.location === 'apartment' && styles.radioButtonSelected
                  ]}
                  onPress={() => setFormData({ ...formData, location: 'apartment' })}
                >
                  <Text style={styles.radioText}>В квартире</Text>
                </Pressable>
                <Pressable 
                  style={[
                    styles.radioButton,
                    formData.location === 'building' && styles.radioButtonSelected
                  ]}
                  onPress={() => setFormData({ ...formData, location: 'building' })}
                >
                  <Text style={styles.radioText}>В доме</Text>
                </Pressable>
              </View>
              {errors.location && (
                <Text style={styles.errorText}>{errors.location}</Text>
              )}
            </View>

            {formData.location === 'apartment' && (
              <View style={styles.section}>
                <Text style={styles.label}>Номер квартиры</Text>
                <TextInput
                  style={styles.input}
                  value={formData.apartmentNumber}
                  onChangeText={(text) => setFormData({ ...formData, apartmentNumber: text })}
                  keyboardType="number-pad"
                  placeholder="Введите номер квартиры"
                />
                {errors.apartmentNumber && (
                  <Text style={styles.errorText}>{errors.apartmentNumber}</Text>
                )}
              </View>
            )}

            <View style={styles.section}>
              <Text style={styles.label}>Телефон для связи</Text>
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
                keyboardType="phone-pad"
                placeholder="Введите номер телефона"
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Дополнительная информация</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.description}
                onChangeText={(text) => setFormData({ ...formData, description: text })}
                placeholder="Опишите проблему подробнее (необязательно)"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable 
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Отправить</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoid: {
    flex: 1,
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
  form: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  radioButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#FF5252',
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReportDetailsScreen;
