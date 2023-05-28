import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {AUTH_LOADING, ERROR, USER_DETAILS} from '../reducers/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {TextStyles} from '../../constants/TextStyle';
import Input from '../../components/inputField/Input';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/buttons/CustomButton';
import AlreadyTextContainer from '../../components/commons/AlreadyTextContauner';
import ErrorText from '../../components/commons/ErrorText';
const ScreenHeight = Dimensions.get('screen').height;

const RegistrationScreen = () => {
  const [selectedField, setSelectedField] = useState('');
  const SignupUser = () => {
    return async dispatch => {
      auth()
        .createUserWithEmailAndPassword('Static@gmail.com', '11111111')
        .then(res => {
          console.log('res.user.uid : ', res.user.uid);
          if ('Users' != res.user.uid) {
            firestore().collection('Users').doc(res.user.uid).set({
              USER_ID: res.user.uid,
              NAME: 'static',
              EMAIL: 'Static@gmail.com',
            });
            const userDetails = {
              USER_ID: res.user.uid,
              NAME: 'static',
              EMAIL: 'Static@gmail.com',
              LOCATION: 'staticlo',
            };
            console.log(userDetails);
          }
        })
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          dispatch({type: AUTH_LOADING, payload: false});
        });
    };
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    mode: 'all',
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(), setSelectedField('');
      }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={TextStyles.title(Colors.background, moderateScale(30))}>
            Sign Up
          </Text>
          <Text style={TextStyles.title(Colors.background, moderateScale(18))}>
            Lorem Lipsum to access the account
          </Text>
        </View>
        <ScrollView style={styles.lowerContainer}>
          <Input
            name="name"
            inputLabel="Name"
            control={control}
            onFocus={() => {
              setSelectedField('name');
            }}
            borderColor={selectedField == 'name' ? Colors.primary : Colors.text}
            rules={{
              required: 'name is required',
            }}
            // style={{marginTop: 20}}
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <Text style={styles.errormessage}>{errors.name.message}</Text>
          )}
          <Input
            name="email"
            inputLabel="Email"
            control={control}
            onFocus={() => {
              setSelectedField('email');
            }}
            borderColor={
              selectedField == 'email' ? Colors.primary : Colors.text
            }
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
          {errors.email && <ErrorText text={errors.email.message} />}
          <Input
            name="password"
            inputLabel="Password"
            control={control}
            onFocus={() => {
              setSelectedField('password');
            }}
            borderColor={
              selectedField == 'password' ? Colors.primary : Colors.text
            }
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Too short minimum length is 8',
              },
              maxLength: {
                value: 16,
                message: 'Password maximum length is 16',
              },
            }}
            // style={{marginTop: 20}}
            placeholder="Enter Your Password"
          />
          {errors.password && <ErrorText text={errors.password.message} />}
          <Input
            name="confirmPassword"
            inputLabel="Confirm Password"
            control={control}
            onFocus={() => {
              setSelectedField('confirmPassword');
            }}
            borderColor={
              selectedField == 'confirmPassword' ? Colors.primary : Colors.text
            }
            rules={{
              required: 'Confirm Password is required',
              minLength: {
                value: 8,
                message: 'Too short minimum length is 8',
              },
              maxLength: {
                value: 16,
                message: 'Password maximum length is 16',
              },
              validate: {
                positive: value =>
                  value === watch('password') || 'The passwords do not match',
              },
            }}
            // style={{marginTop: 20}}
            placeholder="Enter Your Confrim Password"
          />
          {errors.confirmPassword && (
            <Text style={styles.errormessage}>
              {errors.confirmPassword.message}
            </Text>
          )}
          <AlreadyTextContainer
            firstText={"Doesn't have a Account"}
            secondText={'Sign up'}
          />
          <CustomButton
            title={'Signup'}
            onPress={() => SignupUser()}
            marginTop={verticalScale(20)}
            marginBottom={verticalScale(30)}
          />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  upperContainer: {
    height: ScreenHeight * 0.2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    paddingLeft: scale(30),
  },

  lowerContainer: {
    flex: 7,
    borderTopRightRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    backgroundColor: Colors.background,
    paddingTop: verticalScale(30),
    // justifyContent: 'center',
  },
});
