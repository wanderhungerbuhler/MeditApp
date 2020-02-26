import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from './components/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Lessons') {
              iconName = focused ? 'book-open' : 'book-open';
            } else if (route.name === 'Meditation') {
              iconName = focused ? 'feather' : 'feather';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4A80F0',
          inactiveTintColor: '#89909A',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lessons" component={Home} />
        <Tab.Screen name="Meditation" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}