import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {BLACK, SECONDARY_COLOR, WHITE} from '../assets/Colors';
import ReusableButton from '../components/ReusableButton';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleSignUP = () => {
    try {
      //
      console.log('SignUp log: Hello handle signup here');
    } catch (error) {
      console.log('SignUp log:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{position: 'absolute', bottom: 10, left: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backBtn}>
            <Image
              source={require('../assets/images/less.png')}
              style={{width: 10, height: 17}}
            />
            <Text style={styles.backbtnText}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.parent}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          {/* account email */}
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.emailText}>Account Email</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Your Email id"
            />
          </View>
          {/* password */}
          <View style={styles.commonView}>
            <Text style={styles.emailText}>Password</Text>
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
          </View>
          {/* confirm password */}
          <View style={styles.commonView}>
            <Text style={styles.emailText}>Confirm Password</Text>
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
          </View>
          {/* first name and last name */}
          <View style={styles.commonView}>
            <Text style={styles.emailText}>First & Last Name</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Your First & Last Name"
            />
          </View>
          {/* company name */}
          <View style={styles.commonView}>
            <Text style={styles.emailText}>Company</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Your Company Name"
            />
          </View>
          {/* phone number */}
          <View style={styles.commonView}>
            <Text style={styles.emailText}>Phone Number</Text>
            <View style={styles.passInputView}>
              <TouchableOpacity style={styles.countryCodeBtn}>
                <Image
                  source={require('../assets/images/india1.png')}
                  style={{width: 12, height: 12, marginRight: 5}}
                />
                <Text style={{color: '#000'}}>+91</Text>
              </TouchableOpacity>
              <View style={{height: 39, borderRightWidth: 1}} />
              <TextInput
                placeholder="Enter Phone Number"
                secureTextEntry={showPassword}
                style={{flex: 1, paddingLeft: 10}}
              />
            </View>
          </View>
          {/* sign up button */}
          <View style={styles.commonView}>
            <ReusableButton title="Sign Up" onPress={handleSignUP} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backbtnText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    color: '#000',
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 30,
    color: '#000',
  },
  parent: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  emailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    marginBottom: 5,
  },
  EmailInput: {
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
    paddingHorizontal: 10,
  },
  commonView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  countryCodeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
