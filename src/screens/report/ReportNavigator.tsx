import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReportStackParamList } from '../../types/report';

import ReportMainScreen from './ReportMainScreen';
import ReportDetailsScreen from './ReportDetailsScreen';
import ReportSuccessScreen from './ReportSuccessScreen';

const Stack = createStackNavigator<ReportStackParamList>();

const ReportNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReportMain" component={ReportMainScreen} />
      <Stack.Screen name="ReportDetails" component={ReportDetailsScreen} />
      <Stack.Screen name="ReportSuccess" component={ReportSuccessScreen} />
    </Stack.Navigator>
  );
};

export default ReportNavigator;
