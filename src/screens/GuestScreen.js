import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const GuestScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.appName}>Objects Counter</Text>
      </View>
      <View style={styles.child}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('DashBoard');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>CONTINUE AS GUEST</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 30,
    fontFamily: 'TiltNeon-Regular',
    color: '#000',
    elevation: 5,
  },
  child: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingVertical: 15,
    width: 300,
    borderRadius: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'Roboto-SemiBold',
    color: '#FFFF',
  },
});
