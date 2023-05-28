import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {moderateScale, verticalScale} from 'react-native-size-matters';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        {/* <Image
          style={styles.images}
          source={require('../assets/images/zenkoderLogo.png')}
          // resizeMode="center"
        /> */}
      </View>
      <View style={styles.lowerContainer}>
        {/* <Input
        name="email"
        inputLabel="Email"
        control={control}
        keyboardType="email-address"
        rules={{
          required: 'email is required',
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Enter a valid email',
          },
        }}
        // style={{marginTop: 20}}
        placeholder="Enter Your Email"
      />
      {errors.email && (
        <Text style={styles.errormessage}>{errors.email.message}</Text>
      )}
      <Input
        name="email"
        inputLabel="Password"
        control={control}
        rules={{
          required: 'Password is required',
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Enter a valid email',
          },
        }}
        // style={{marginTop: 20}}
        placeholder="Enter Your Password"
      />
      {errors.email && (
        <Text style={styles.errormessage}>{errors.email.message}</Text>
      )} */}
        {/* <CustomButton title={'Login'} marginTop={verticalScale(40)} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  upperContainer: {
    flex: 3,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    height: '40%',
    aspectRatio: 1.4 / 1,
    tintColor: 'white',
  },
  lowerContainer: {
    flex: 7,
    borderTopRightRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    backgroundColor: '#fff',
    paddingTop: verticalScale(10),
  },
});
