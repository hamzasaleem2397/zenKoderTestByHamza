import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './AuthNavigation';
import {BottomTab, MessageStackNavigator} from './NestedNavigation';
import {useSelector} from 'react-redux';

const AppNavigationContainer = () => {
  const userDetails = useSelector(state => state.auth.authDetails);

  // console.log('userDetails====>',userDetails.role_id)
  return (
    <NavigationContainer>
      {userDetails ? <MessageStackNavigator /> : <AuthStackNavigator />}

      {/* <MessageStackNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
