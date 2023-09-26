import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, BLACK, WHITE} from '../assets/Colors';
import ReusableButton from '../components/ReusableButton';

const LoginSignUpButton = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/BG.png')}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.parent}>
        <Image source={require('../assets/images/appIcon.png')} />
      </View>
      <View style={styles.buttonsView}>
        <ReusableButton title="Login here" onPress={goToLogin} />
        <ReusableButton title="Create Account" onPress={goToSignUp} />
      </View>
    </ImageBackground>
  );
};

export default LoginSignUpButton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  buttons: {
    width: 312,
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
