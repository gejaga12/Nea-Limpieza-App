import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { InicioScreen } from '../screens/InicioScreen';
import { IngresoEgresoScreen } from '../screens/IngresoEgresoScreen';
import { CardScreen } from '../screens/CardScreen';
import { TareaDeLimpiezaScreen } from '../screens/TareaDeLimpiezaScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InicioScreen" component={InicioScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IngresoEgresoScreen" component={IngresoEgresoScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="TareaDeLimpiezaScreen" component={TareaDeLimpiezaScreen} />
    </Stack.Navigator>
  );
};
