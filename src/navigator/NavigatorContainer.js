import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './AuthNavigation';
import {BottomTab, MessageStackNavigator} from './NestedNavigation';

const AppNavigationContainer = () => {
  // const isSignIn = useSelector(state => state.auth.isSingin);

  // console.log('userDetails====>',userDetails.role_id)
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      {/* <BottomTab /> */}
      <MessageStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
