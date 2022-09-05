import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  RecentMovies from './components/RecentMovies';
import  Pocket from './components/Pocket';
import  Details from './components/Details';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  
        backgroundColor = "#7d838c"
        barStyle = "dark-content"
      />
      <Tab.Navigator>
        <Tab.Screen name="Recent movies" component={RecentMovies} />
        <Tab.Screen name="Pocket" component={Pocket} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
