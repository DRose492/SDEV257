import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PlanetsScreen from './screens/Planets_Screen';
import FilmsScreen from './screens/Films_Screen';
import SpaceshipsScreen from './screens/Spaceships_Screen';
import NetworkGuard from './NetworkGuard';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function IOSNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  );
}

function AndroidNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NetworkGuard>
      <NavigationContainer>
        {Platform.OS === 'ios' ? <IOSNavigator /> : <AndroidNavigator />}
      </NavigationContainer>
    </NetworkGuard>
  );
}
