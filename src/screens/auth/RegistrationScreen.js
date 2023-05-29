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

import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {TextStyles} from '../../constants/TextStyle';
import Input from '../../components/inputField/Input';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/buttons/CustomButton';
import AlreadyTextContainer from '../../components/commons/AlreadyTextContauner';
import ErrorText from '../../components/commons/ErrorText';
import {useDispatch, useSelector} from 'react-redux';
import {SignupUser} from '../../redux/action/AuthAction';
const ScreenHeight = Dimensions.get('screen').height;

const RegistrationScreen = () => {
  const [selectedField, setSelectedField] = useState('');
  const {authLoading} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const registration = data => {
    // console.log(data);
    dispatch(SignupUser(data));
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
            <ErrorText text={errors.confirmPassword.message} />
          )}
          <AlreadyTextContainer
            firstText={"Doesn't have a Account"}
            secondText={'Sign up'}
          />
          <CustomButton
            title={'Signup'}
            onPress={handleSubmit(registration)}
            loading={authLoading}
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
