import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';

const StackNavigator = createNativeStackNavigator();
export default function Stack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="BottomTab" component={BottomTab} />
    </StackNavigator.Navigator>
  );
}
