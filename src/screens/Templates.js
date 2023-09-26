import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Templates = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Templates</Text>
    </View>
  );
};

export default Templates;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
