import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View, StyleSheet } from 'react-native';

// Импорты основных экранов
import HomeScreen from '../screens/home/HomeScreen';
import SupportScreen from '../screens/support/SupportScreen';
import ReportScreen from '../screens/report/ReportScreen';
import AssistantScreen from '../screens/assistant/AssistantScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import DetailScreen from '../screens/detail/DetailScreen';

// Импорты экранов профиля
import ProfileSettingsScreen from '../screens/profile/ProfileSettingsScreen';
import NotificationSettingsScreen from '../screens/profile/NotificationSettingsScreen';
import RequestHistoryScreen from '../screens/profile/RequestHistoryScreen';
import AboutAppScreen from '../screens/profile/AboutAppScreen';
import SupportSuccessScreen from '../screens/support/SupportSuccessScreen';

export type MainTabParamList = {
  HomeStack: undefined;
  Support: undefined;
  Report: undefined;
  Assistant: undefined;
  ProfileStack: undefined;
};

// Создаем отдельный стек для Home
export type HomeStackParamList = {
  Home: undefined;
  Detail: { shutdown: any };
};

const HomeStack = createStackNavigator<HomeStackParamList>();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export type ProfileStackParamList = {
  Profile: undefined;
  ProfileSettings: undefined;
  NotificationSettings: undefined;
  RequestHistory: undefined;
  AboutApp: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
      <ProfileStack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <ProfileStack.Screen name="RequestHistory" component={RequestHistoryScreen} />
      <ProfileStack.Screen name="AboutApp" component={AboutAppScreen} />
    </ProfileStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            switch (route.name) {
              case 'HomeStack':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Support':
                iconName = focused ? 'help-circle' : 'help-circle-outline';
                break;
              case 'Report':
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                break;
              case 'Assistant':
                iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                break;
              case 'ProfileStack':
                iconName = focused ? 'person' : 'person-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 65,
            paddingBottom: Platform.OS === 'ios' ? 20 : 12,
            paddingTop: 8,
            backgroundColor: '#fff',
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }
        })}>
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackNavigator} 
          options={{ 
            title: 'Главная',
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Support" 
          component={SupportScreen} 
          options={{ 
            title: 'Поддержка',
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Report" 
          component={ReportScreen} 
          options={{ 
            title: 'Сообщить',
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Assistant" 
          component={AssistantScreen} 
          options={{ 
            title: 'Ассистент',
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="ProfileStack" 
          component={ProfileStackNavigator} 
          options={{ 
            title: 'Профиль',
            headerShown: false
          }} 
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppNavigator;
