import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#000',
  },
});
