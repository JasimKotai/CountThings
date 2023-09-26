// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {WHITE} from '../assets/Colors';

// const Account = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         {/* <TouchableOpacity
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <View style={styles.backButton}>
//             <Image
//               source={require('../assets/images/back.png')}
//               style={{width: 15, height: 15}}
//             />
//             <Text style={styles.bactBtnText}>Back</Text>
//           </View>
//         </TouchableOpacity> */}
//         <Text style={styles.title}>Home</Text>
//       </View>
//       <TouchableOpacity
//         onPress={() => {
//           // navigation.navigate('More');
//           // navigation.closeDrawer();
//           navigation.openDrawer();
//         }}>
//         <Text>Open</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Account;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 80,
//     width: '100%',
//     backgroundColor: WHITE,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontFamily: 'Montserrat-Bold',
//     color: '#000',
//     alignSelf: 'center',
//     marginTop: 25,
//   },
//   backButton: {
//     position: 'absolute',
//     flexDirection: 'row',
//     paddingVertical: 5,
//     top: 20,
//     left: 10,
//     alignItems: 'center',
//   },
//   bactBtnText: {
//     color: '#000',
//     fontFamily: 'Poppins-Regular',
//   },
// });

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
