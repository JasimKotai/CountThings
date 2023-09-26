import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Linking,
  Alert,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BG,
  BTNCOLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE,
} from '../assets/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Prepare from './Prepare';

const DashBoard = ({navigation}) => {
  const [image, setImage] = useState('');
  // console.log(image.assets[0].uri);
  // camera permission request
  const handleRequestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
        const granted = await PermissionsAndroid.request(permission); //await
        // console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('DashBoard: camera permission granted');
          handleCamera();
        } else {
          console.log('Permission denied');
        }
      }
    } catch (error) {
      console.log('DashBoard log:', error);
    }
  };
  // camera open function
  const handleCamera = async () => {
    try {
      const photo = await launchCamera({mediaType: 'photo'});
      console.log('DashBoard log-', photo);
      if (photo.didCancel !== true) {
        navigation.navigate('Prepare');
      }
    } catch (error) {
      console.log('DashBoard log err', error);
    }
  };
  // gallery permission request
  const handleGalleryPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const AndroidVersion = Platform.Version;
        if (AndroidVersion >= 33) {
          const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
          const granted = await PermissionsAndroid.request(permission);
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log('android 33 permission granted');
            handleGallery();
          } else {
            console.log('android 33 permission denied');
          }
        } else {
          const permission =
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
          const granted = await PermissionsAndroid.request(permission);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log('android 12 permission granted');
            handleGallery();
          } else {
            console.log('android 12 permission denied');
          }
        }
      }
    } catch (error) {
      console.log('DashBoard  handleGalleryPermission log: ', error);
    }
  };
  // gallery open function
  const handleGallery = async () => {
    try {
      const galleryPhoto = await launchImageLibrary({
        mediaType: 'photo',
      });
      console.log('dashboard - handleGallery', galleryPhoto);
      // setImage(galleryPhoto);
      if (galleryPhoto.didCancel !== true) {
        navigation.navigate('Prepare', {Img: galleryPhoto.assets[0].uri});
      }
    } catch (error) {
      console.log('dashboard log-handleGallery err', error);
    }
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
        </View>
        {/* parent */}
        <View style={styles.parent}>
          {/* gallery button */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => {
                handleGalleryPermission();
              }}>
              <View style={styles.galleryBtn}>
                <Image
                  source={require('../assets/images/gallery.png')}
                  style={{width: 42, height: 34}}
                />
                <Text style={styles.galleryBtnText}>GALARY</Text>
              </View>
            </TouchableOpacity>
            {/* camera button */}
            <TouchableOpacity
              onPress={() => {
                // handleCamera();
                handleRequestCameraPermission();
              }}>
              <View style={styles.galleryBtn}>
                <Image
                  source={require('../assets/images/camera.png')}
                  style={{width: 44, height: 36}}
                />
                <Text style={styles.galleryBtnText}>TAKE PHOTO</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* bottom navigation start */}
          <View style={styles.bottomNav}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Account');
              }}>
              <View style={styles.navigatorButton}>
                <Image
                  source={require('../assets/images/user2.png')}
                  style={[
                    styles.navigatorButtonImg,
                    {tintColor: PRIMARY_COLOR},
                  ]}
                />
                <Text style={[styles.navigatorBtnText, {color: PRIMARY_COLOR}]}>
                  Account
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Settings');
              }}>
              <View style={styles.navigatorButton}>
                <Image
                  source={require('../assets/images/settings3.png')}
                  style={styles.navigatorButtonImg}
                />
                <Text style={styles.navigatorBtnText}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Templates');
              }}>
              <View style={styles.navigatorButton}>
                <Image
                  source={require('../assets/images/template3.png')}
                  style={styles.navigatorButtonImg}
                />
                <Text style={styles.navigatorBtnText}>Templates</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('More');
                // navigation.closeDrawer();
                navigation.openDrawer();
              }}>
              <View style={styles.navigatorButton}>
                <Image
                  source={require('../assets/images/menu3.png')}
                  style={styles.navigatorButtonImg}
                />
                <Text style={styles.navigatorBtnText}>More</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* bottom navigation end */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    position: 'absolute',
    width: '100%',
    paddingVertical: 10,
    bottom: 0,
    justifyContent: 'space-evenly',
  },
  navigatorBtnText: {
    color: BTNCOLOR,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  navigatorButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigatorButtonImg: {
    width: 18,
    height: 18,
    tintColor: BTNCOLOR,
  },
  header: {
    height: 80,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#000',
    marginTop: 20,
  },
  parent: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  galleryBtn: {
    width: 141,
    height: 121,
    backgroundColor: WHITE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  galleryBtnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});
