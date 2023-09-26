import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
