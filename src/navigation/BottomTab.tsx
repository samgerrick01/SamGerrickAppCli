import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';

//Screens
import AboutScreen from '@screens/Chat/ChatScreen';
import AccountScreen from '@screens/Account/AccountScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import SettingScreen from '@screens/Setting/SettingScreen';

import {Colors} from '@themes/index';
import TabBarIcon from './TabBarIcon';

const BottomTabNavigator = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.label,
        tabBarStyle: [
          styles.tabContainer,
          Platform.OS === 'ios' && {
            shadowOffset: {height: -2, width: 2},
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
        ],
        tabBarItemStyle: {
          marginBottom: 7,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#0071ff',
      }}
      safeAreaInsets={{
        bottom: 0,
      }}>
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              size={22}
              types={'Ion'}
              name={'home'}
              colors={focused ? Colors.icBlue : Colors.black}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Chat"
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              size={22}
              types={'Ant'}
              name={'wechat'}
              colors={focused ? Colors.icBlue : Colors.black}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              size={22}
              types={'Ion'}
              name={'settings'}
              colors={focused ? Colors.icBlue : Colors.black}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              size={22}
              types={'Entypo'}
              name={'user'}
              colors={focused ? Colors.icBlue : Colors.black}
            />
          ),
          headerShown: false,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    backgroundColor: 'white',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
