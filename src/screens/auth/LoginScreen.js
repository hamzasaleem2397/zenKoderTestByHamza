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
const ScreenHeight = Dimensions.get('screen').height;
const LoginScreen = ({navigation}) => {
  const [selectedField, setSelectedField] = useState('');
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
            Sign In
          </Text>
          <Text style={TextStyles.title(Colors.background, moderateScale(18))}>
            Lorem Lipsum to access the account
          </Text>
        </View>
        <ScrollView style={styles.lowerContainer}>
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
          {errors.email && (
            <Text style={styles.errormessage}>{errors.email.message}</Text>
          )}
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
          )}

          <AlreadyTextContainer
            firstText={"Doesn't have a Account"}
            secondText={'Sign up'}
            onPress={() => {
              navigation.navigate('registration');
            }}
          />

          <CustomButton
            title={'Login'}
            marginTop={verticalScale(20)}
            marginBottom={verticalScale(40)}
          />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    flex: 1,
    borderTopRightRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    backgroundColor: Colors.background,
    paddingTop: verticalScale(40),
    // justifyContent: 'center',
  },
});