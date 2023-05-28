import React, {forwardRef, useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {useController} from 'react-hook-form';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import Entypo from 'react-native-vector-icons/Entypo';

import {Colors} from '../../constants/Colors';

// import Colors from '../constants/Colors';

const Input = forwardRef((props, ref) => {
  const [hidePassword, setHidePassword] = useState(true);

  const {field} = useController({
    control: props.control,
    defaultValue: '',
    name: props.name,
    rules: props.rules,
  });

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.inputLabel(Colors.primary)}>{props.inputLabel}</Text>
      <View
        style={[
          styles.inputContainer(props.borderColor),
          props.inputContainer,
        ]}>
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          secureTextEntry={props.password ? hidePassword : false}
          multiline={props.multiline}
          style={[styles.inputText(Colors.primary), props.textStyle]}
          numberOfLines={props.numberOfLines}
          // returnKeyType={props.returnKeyType || 'next'}
          autoCorrect={false}
          onKeyPress={props.onKeyPress}
          focusable={true}
          onFocus={props.onFocus}
          keyboardType={props.keyboardType}
          ref={ref}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
          placeholderTextColor={Colors.text}
          maxLength={props.maxLength}
          editable={props.editable}
        />
        {props.password ? (
          <Entypo
            style={styles.eyeIcon}
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-with-line'}
            size={scale(20)}
            color={Colors.primary}
          />
        ) : null}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(10),
  },
  inputLabel: color => ({
    color,

    // paddingLeft: scale(13),
    fontSize: moderateScale(17),
  }),
  inputContainer: (borderColor = '#fff') => ({
    borderBottomWidth: moderateScale(2),
    paddingVertical: verticalScale(4),
    borderColor,
    // paddingLeft: scale(10),
  }),
  inputText: color => ({
    color,
    fontSize: moderateScale(15),
    paddingVertical: verticalScale(2),
  }),

  eyeIcon: {
    position: 'absolute',
    right: moderateScale(5),
    top: 4,
  },
});

export default Input;
