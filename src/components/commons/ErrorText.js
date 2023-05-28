import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constants/Colors';

const ErrorText = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: verticalScale(5),
    paddingLeft: scale(10),
    fontSize: moderateScale(15),
    color: Colors.errorText,
  },
});
