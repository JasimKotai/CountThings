import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, WHITE} from '../assets/Colors';

const ReusableButton = ({navigation, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.buttons}>
      <Text style={styles.btntext}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  btntext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: WHITE,
    elevation: 5,
  },
});
