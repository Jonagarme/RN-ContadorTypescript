/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
//import {ContadorScree} from './src/screens/ContadorScree';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*  <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  );
};

/* npx react-native run-android */
