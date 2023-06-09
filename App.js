/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {Colors} from './src/constants/Colors';
import AppNavigationContainer from './src/navigator/NavigatorContainer';
import {useDispatch} from 'react-redux';
import {GetDataStorage} from './src/redux/action/GetLocalStorage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDataStorage());
    const timer = setTimeout(() => SplashScreen.hide(), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <AppNavigationContainer />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
