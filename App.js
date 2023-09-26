import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <>
      {/* <StatusBar hidden /> */}
      <MainNavigation />
    </>
  );
};

export default App;
