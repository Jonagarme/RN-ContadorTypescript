import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import {ContadorScree} from './src/screens/ContadorScree';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

/* npx react-native run-android */
