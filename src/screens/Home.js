import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {SECONDARY_COLOR, WHITE} from '../assets/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Home = ({navigation}) => {
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
          console.log('Home: camera permission granted');
          handleCamera();
        } else {
          console.log('Permission denied');
        }
      }
    } catch (error) {
      console.log('Home log:', error);
    }
  };
  // camera open function
  const handleCamera = async () => {
    try {
      const photo = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });
      console.log('Home log-', photo);
      if (photo.didCancel !== true) {
        navigation.navigate('Prepare', {img: photo.assets[0].uri});
      }
    } catch (error) {
      console.log('Home log err', error);
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
      console.log('HOme  handleGalleryPermission log: ', error);
    }
  };
  // gallery open function
  const handleGallery = async () => {
    try {
      const galleryPhoto = await launchImageLibrary({
        mediaType: 'photo',
      });
      // console.log('Home - handleGallery', galleryPhoto);
      // setImage(galleryPhoto);
      if (galleryPhoto.didCancel !== true) {
        navigation.navigate('Prepare', {img: galleryPhoto.assets[0].uri});
      }
    } catch (error) {
      console.log('Home log-handleGallery err', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{height: 80}}>
        <Header />
      </View>
      <View style={styles.Parent}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => {
              handleGalleryPermission();
            }}>
            <View style={styles.galleryBtn}>
              <Image
                source={require('../assets/images/gallery1.png')}
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
                source={require('../assets/images/camera1.png')}
                style={{width: 44, height: 36}}
              />
              <Text style={styles.galleryBtnText}>TAKE PHOTO</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Parent: {
    backgroundColor: SECONDARY_COLOR,
    flex: 1,
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
    color: '#000',
  },
});
