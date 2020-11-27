/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Map from "./Map"

 function App() {
  return(
    <Map />)
    
}

export default App;
