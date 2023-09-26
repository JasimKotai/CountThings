import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import GettingStarted from '../screens/GettingStarted';
import Guides from '../screens/Guides';
import DashBoard from '../screens/DashBoard';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerPosition: 'right'}}>
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
      {/* <Drawer.Screen name="DashBoard" component={DashBoard} />
      <Drawer.Screen name="GettingStarted" component={GettingStarted} />
      <Drawer.Screen name="Guides" component={Guides} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
