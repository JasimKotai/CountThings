import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {BG, PRIMARY_COLOR, SECONDARY_COLOR} from '../assets/Colors';

const Prepare = ({route, navigation}) => {
  const img = route.params;
  console.log('Prepare log; ', img);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.backbtnView}>
            <Image
              source={require('../assets/images/back.png')}
              style={{width: 10, height: 17}}
            />
            <Text style={styles.backBtntext}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Prepare</Text>
        <TouchableOpacity style={{marginTop: 30, marginRight: 10}}>
          <Text style={styles.reviewBtnText}>Review</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent}>
        <View style={{backgroundColor: SECONDARY_COLOR, padding: 30}} />
        <View style={styles.child}>
          <Image source={{uri: img.img}} style={{flex: 1}} />
        </View>
        <View style={{backgroundColor: SECONDARY_COLOR, padding: 30}} />

        <View style={styles.countBTNview}>
          <TouchableOpacity style={styles.CountBTN}>
            <Text style={{fontFamily: 'Poppins-Regular', color: '#FFFF'}}>
              Count
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Prepare;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backbtnView: {
    flexDirection: 'row',
    height: 40,
    width: 70,
    //   backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: 10,
  },
  backBtntext: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000',
    marginTop: 20,
  },
  reviewBtnText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  parent: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
  },
  child: {
    backgroundColor: BG,
    flex: 1,
  },
  countBTNview: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountBTN: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
});
