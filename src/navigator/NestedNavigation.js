import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {moderateScale, verticalScale} from 'react-native-size-matters';

import Icons from '../components/commons/Icon';

import ProfileScreen from '../screens/profile/ProfileScreen';

import {Colors} from '../constants/Colors';
import ChatListScreen from '../screens/chat/ChatListScreen';
import ChatScreen from '../screens/chat/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = navigation => {
  // const color = useSelector(state => state.color.colorTheme);
  const defaultTabNavOptions = {
    tabBarStyle: {
      backgroundColor: Colors.secondary,
      height: verticalScale(60),
      // position: 'absolute',
      //color you want to change
      keyboardHidesTabBar: true,
      elevation: 0,
      borderTopWidth: 0,
      paddingBottom: 12,
    },
    statusBarColor: Colors.primary,
    statusBarStyle: 'light',
    // tabBarShowLabel: false,
    overlayColor: 'transparent',
    tabBarLabelStyle: {
      fontSize: moderateScale(14),
    },
    tabBarActiveTintColor: Colors.primary,
    // tabBarInactiveTintColor: color.TypographyColorDark,
  };
  return (
    <Tab.Navigator
      // sceneContainerStyle={{backgroundColor: 'blue'}}

      sceneContainerStyle={{backgroundColor: 'blue'}}
      initialRouteName="home"
      screenOptions={{
        ...defaultTabNavOptions,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="messageStack"
        component={ChatListScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Chats',
          tabBarIcon: ({focused, color, size}) => (
            <Icons
              type="MaterialCommunityIcons"
              name="chat"
              color={color}
              size={moderateScale(32)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',

          tabBarIcon: ({focused, color, size}) => (
            <Icons
              type="FontAwesome"
              name="user"
              color={color}
              size={moderateScale(30)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="bottab" component={BottomTab} />
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
