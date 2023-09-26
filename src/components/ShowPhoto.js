import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ShowPhoto = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: }}/> */}
      <Text>Hello world</Text>
    </View>
  );
};

export default ShowPhoto;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
