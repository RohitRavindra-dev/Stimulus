import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import AppIconSVGComponent from '../../assets/svgs/AppIcon';
import {CountUpScreen} from '../screens/counting/CountUpScreen';
import {ColorNamesScreen} from '../screens/color-names/ColorNamesScreen';
import { NumbersMemoryScreen } from '../screens/number-memory/NumbersMemoryScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#420015'},
        headerTitleStyle: {
          fontSize: 32,
          fontWeight:'500',
          paddingVertical: 6,
          color: '#ffc800',
          letterSpacing: 2,
        },
        headerTintColor: 'yellow',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Stimulus',
          headerLeft: () => <AppIconSVGComponent />,
        }}
      />
      <Stack.Screen
        name="CountUp"
        component={CountUpScreen}
        options={{
          headerTitle: 'Count Up',
        }}
      />
      <Stack.Screen
        name="ColorNames"
        component={ColorNamesScreen}
        options={{
          headerTitle: 'Color Names',
        }}
      />
      <Stack.Screen
        name="NumberMemory"
        component={NumbersMemoryScreen}
        options={{
          headerTitle: 'Numbers Memory',
        }}
      />
    </Stack.Navigator>
  );
};
