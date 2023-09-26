import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const More = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

export default More;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
