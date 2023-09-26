import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {BG, SECONDARY_COLOR, WHITE} from '../assets/Colors';
import ReusableButton from '../components/ReusableButton';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  // Login Api Call
  const handleLogin = () => {
    try {
      //
      console.log('Login log: Hello World!');
    } catch (error) {
      console.log('Login Log:', error);
    }
  };
  return (
    <View style={styles.continer}>
      <View style={styles.header}>
        <View
          style={{
            position: 'absolute',
            top: 40,
            bottom: 20,
            left: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backBTN}>
            <Image
              source={require('../assets/images/less.png')}
              style={{width: 10, height: 17}}
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.LoginTitle}>Login</Text>
      </View>
      <View style={styles.parent}>
        <Text style={styles.emailPassText}>Account Email</Text>
        <TextInput
          placeholder="Enter Your Email Id"
          inputMode="email"
          style={styles.TextInput}
        />
        <View style={{marginTop: 30}}>
          <Text style={styles.emailPassText}>Password</Text>
          <View style={styles.passInputView}>
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={showPassword}
              style={{flex: 1}}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              <Image
                source={
                  showPassword == true
                    ? require('../assets/images/hidden.png')
                    : require('../assets/images/show.png')
                }
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <ReusableButton title="Login here" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: WHITE,
  },
  backText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    margin: 0,
    padding: 0,
    marginLeft: 10,
    color: '#000',
  },
  LoginTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000',
    marginTop: 20,
  },
  parent: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
    paddingTop: 40,
    paddingHorizontal: 22,
  },
  emailPassText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    marginBottom: 5,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#FFFF',
  },
  passInputView: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backBTN: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
