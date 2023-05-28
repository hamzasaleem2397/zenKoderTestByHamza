import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constants/Colors';

const ErrorText = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: verticalScale(5),
    fontSize: moderateScale(13),
    color: Colors.fontError,
  },
});
