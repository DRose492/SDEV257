import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import PlanetsScreen from './screens/Planets_Screen';
import FilmsScreen from './screens/Films_Screen';
import SpaceshipsScreen from './screens/Spaceships_Screen';

import PlanetDetailScreen from './screens/Planet_Detail_Screen';
import FilmDetailScreen from './screens/Film_Detail_Screen';
import StarshipDetailScreen from './screens/Starship_Detail_Screen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: '#0d0d0d',
  },
  headerTitleStyle: {
    color: '#FFE81F',
    fontWeight: 'bold',
  },
  headerTintColor: '#FFE81F',
};

function PlanetsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Planets" component={PlanetsScreen} />
      <Stack.Screen name="PlanetDetail" component={PlanetDetailScreen} />
    </Stack.Navigator>
  );
}

function FilmsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Films" component={FilmsScreen} />
      <Stack.Screen name="FilmDetail" component={FilmDetailScreen} />
    </Stack.Navigator>
  );
}

function SpaceshipsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Stack.Screen name="StarshipDetail" component={StarshipDetailScreen} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="PlanetsTab" component={PlanetsStackNavigator} options={{ title: "Planets" }} />
      <Tab.Screen name="FilmsTab" component={FilmsStackNavigator} options={{ title: "Films" }} />
      <Tab.Screen name="SpaceshipsTab" component={SpaceshipsStackNavigator} options={{ title: "Spaceships" }} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="PlanetsDrawer" component={PlanetsStackNavigator} options={{ title: "Planets" }} />
      <Drawer.Screen name="FilmsDrawer" component={FilmsStackNavigator} options={{ title: "Films" }} />
      <Drawer.Screen name="SpaceshipsDrawer" component={SpaceshipsStackNavigator} options={{ title: "Spaceships" }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' ? <Tabs /> : <DrawerNav />}
    </NavigationContainer>
  );
}
