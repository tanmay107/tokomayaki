import { View, Text } from 'react-native';
import React from 'react';
import LandingScreen from './LandingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from './DiscoverScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();

const GetStartedScreen = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Land') {
                iconName = 'logo-bitcoin'
            } else if (route.name === 'Discover') {
                iconName = 'analytics-outline';
            } else if (route.name === 'Profile') {
                iconName = 'person-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.backgroud,
            tabBarInactiveTintColor: colors.text,
            tabBarShowLabel: 'false',
            tabBarStyle: {
                backgroundColor: '#626c77',
            }
        })}
      >
        <Tab.Screen name="Land" component={LandingScreen} options={{ headerShown: false, }}/>
        <Tab.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false, }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, }}/>
      </Tab.Navigator>
  )
}

export default GetStartedScreen