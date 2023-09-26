import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../splash/Splash';
import GuestScreen from '../screens/GuestScreen';
import BottomNavigation from './BottomNavigation';
import DashBoard from '../screens/DashBoard';
import LoginSignUpButton from '../screens/LoginSignUpButton';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Account from '../screens/Account';
import Settings from '../screens/Settings';
import Templates from '../screens/Templates';
import More from '../screens/More';
import Parent from '../screens/Parent';
import CameraScreen from '../components/CameraScreen';
import ShowPhoto from '../components/ShowPhoto';
import Prepare from '../screens/Prepare';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GuestScreen" component={GuestScreen} />
        {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> */}
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="LoginSignUpButton" component={LoginSignUpButton} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Templates" component={Templates} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ShowPhoto" component={ShowPhoto} />
        <Stack.Screen name="Prepare" component={Prepare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
