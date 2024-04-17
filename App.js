// App.js
import React from 'react';
import { View } from 'react-native';
import Splashscreen from './components/Splashscreen';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetail from './components/CardDetail';
import Iconhandler from './components/Iconhandler';
import CardCoffee from './components/CardCoffee';
import Payment from './components/Payment';
import Favourite from './components/Favourite';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="CardDetail" component={CardDetail}></Stack.Screen>
        <Stack.Screen name="Iconhandler" component={Iconhandler}></Stack.Screen>
        <Stack.Screen name="CardCoffee" component={CardCoffee}></Stack.Screen>
        <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
        <Stack.Screen name="Favourite" component={Favourite}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}