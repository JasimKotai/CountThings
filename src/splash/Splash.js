import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {PRIMARY_COLOR, WHITE} from '../assets/Colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Parent');
    }, 1000);
  }, []);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ImageBackground
        style={styles.container}
        source={require('../assets/images/BG.png')}>
        <View style={styles.parent}>
          <Image
            source={require('../assets/images/appIcon.png')}
            style={{width: 180, height: 160}}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  appName: {
    fontSize: 30,
    fontFamily: 'TiltNeon-Regular',
    color: '#FFFF',
    elevation: 5,
  },
});
