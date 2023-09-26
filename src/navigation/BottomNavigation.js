import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Settings from '../screens/Settings';
import Templates from '../screens/Templates';
import More from '../screens/More';
import Home from '../screens/Home';
import {BG, BTNCOLOR, PRIMARY_COLOR} from '../assets/Colors';
const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  //   const name = route.params;
  //   console.log('::::', name);
  const [change, setChange] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          // component={change !== true ? Account : Home}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.CommonBtnView}>
                <Image
                  source={require('../assets/images/home.png')}
                  style={focused ? styles.focusedIcon : styles.icon}
                />
                <Text
                  onPress={() => {
                    setChange(!change);
                  }}
                  style={focused ? styles.foucusedText : styles.normalText}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.CommonBtnView}>
                <Image
                  source={require('../assets/images/user2.png')}
                  style={focused ? styles.focusedIcon : styles.icon}
                />
                <Text style={focused ? styles.foucusedText : styles.normalText}>
                  Account
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Templates"
          component={Templates}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.CommonBtnView}>
                <Image
                  source={require('../assets/images/template3.png')}
                  style={focused ? styles.focusedIcon : styles.icon}
                />
                <Text style={focused ? styles.foucusedText : styles.normalText}>
                  Templates
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
          options={{
            tabBarIcon: ({focused}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
                style={styles.CommonBtnView}>
                <Image
                  source={require('../assets/images/menu3.png')}
                  style={focused ? styles.focusedIcon : styles.icon}
                />
                <Text style={focused ? styles.foucusedText : styles.normalText}>
                  More
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
const styles = StyleSheet.create({
  normalText: {
    color: BTNCOLOR,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  foucusedText: {
    color: PRIMARY_COLOR,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: BG,
  },
  focusedIcon: {
    width: 15,
    height: 15,
    tintColor: PRIMARY_COLOR,
  },
  CommonBtnView: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
