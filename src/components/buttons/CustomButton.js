import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

import {Colors} from '../../constants/Colors';
// import {useSelector} from 'react-redux';

const CustomButton = ({
  title,
  width = scale(320),
  backgoundColor = Colors.primary,
  marginTop = verticalScale(10),
  fontColor,
  borderWidth,
  borderColor = Colors.buttonBorder,
  onPress,
  marginRight = 0,
  paddingVertical = verticalScale(8),
  fontSize,
  marginBottom = 0,
  loading,
  borderRadius = moderateScale(10),
  containerStyle,
  disabled,
}) => {
  // const darkMode = useSelector(state => state.ui.darkMode);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer(
          width,
          backgoundColor,
          marginTop,
          borderWidth,
          paddingVertical,
          borderColor,
          marginRight,
          marginBottom,
          loading,
          borderRadius,
          // darkMode,
        ),
        containerStyle,
      ]}
      disabled={disabled ? disabled : loading}>
      {loading ? (
        <ActivityIndicator size="small" color={'#fff'} />
      ) : (
        <Text style={styles.titleStyle(fontColor, fontSize)}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: (
    width,
    backgroundColor,
    marginTop,
    borderWidth,
    paddingVertical,
    borderColor,
    marginRight,
    marginBottom,
    loading,
    borderRadius,
  ) => ({
    width,
    backgroundColor,
    alignSelf: 'center',
    paddingVertical,
    marginTop,
    borderRadius,
    borderWidth: borderColor ? 2 : 0,
    marginRight,
    borderColor,
    marginBottom,
    opacity: loading ? 0.6 : 1,
  }),
  titleStyle: (color = 'white', fontSize) => ({
    color: color,
    fontSize: fontSize ? fontSize : moderateScale(17),
    textAlign: 'center',
    // fontFamily: Fonts.robotoBold,
  }),
});
