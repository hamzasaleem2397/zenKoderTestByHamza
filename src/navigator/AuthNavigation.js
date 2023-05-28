import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';

const AuthStack = createNativeStackNavigator();
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="registration" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
};
