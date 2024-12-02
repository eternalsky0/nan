import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import AuthNavigator from '../screens/auth/AuthNavigator';
import AppNavigator from './AppNavigator';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="App" component={AppNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
