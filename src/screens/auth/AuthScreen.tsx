import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

const AuthScreen = () => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name || !email || !password) {
          Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
          return;
        }
        await register(name, email, password);
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Что-то пошло не так. Попробуйте позже.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </Text>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Имя"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Почта"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable 
          style={styles.button} 
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Text>
        </Pressable>

        <Pressable 
          style={styles.switchButton} 
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.switchButtonText}>
            {isLogin 
              ? 'Еще нет аккаунта? Зарегистрируйтесь!' 
              : 'Уже есть аккаунт? Войдите!'
            }
          </Text>
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
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  switchButton: {
    marginTop: 16,
    padding: 8,
  },
  switchButtonText: {
    color: '#2196F3',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default AuthScreen;