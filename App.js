import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Login from './src/Login'
import Bestia from './src/Bestia';
import BottegaLouie from './src/BottegaLouie';
import Fishermans from './src/Fishermans';
import GourmetRomano from './src/GourmetRomano';
import KrackNKrab from './src/KrackNKrab';
import NickStefs from './src/NickStefs';
import Rosti from './src/Rosti';
import Taylors from './src/Taylors';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bestia" component={Bestia} />
        <Drawer.Screen name="Bottega Louie" component={BottegaLouie} />
        <Drawer.Screen name="Fishermans' Outlet" component={Fishermans} />
        <Drawer.Screen name="Gourmet Romano" component={GourmetRomano} />
        <Drawer.Screen name="Krack N Krab" component={KrackNKrab} />
        <Drawer.Screen name="Nick and Stefs" component={NickStefs} />
        <Drawer.Screen name="Rosti Tuscan Kitchen" component={Rosti} />
        <Drawer.Screen name="Taylor's Steakhouse" component={Taylors} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


