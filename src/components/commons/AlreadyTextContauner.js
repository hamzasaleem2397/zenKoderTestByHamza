import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font} from '../../constant/Font';
import {scale, verticalScale} from 'react-native-size-matters';
import {TextStyles} from '../../constants/TextStyle';
import {Colors} from '../../constants/Colors';

const AlreadyTextContainer = ({
  firstText,
  secondText,
  firstTextcolor = Colors.text,

  secondTextColor = Colors.primary,
  onPress,
  marginTop,
}) => {
  return (
    <View style={styles.container(marginTop)}>
      <Text style={TextStyles.subTitle(firstTextcolor)}>{firstText} </Text>
      <Text onPress={onPress} style={TextStyles.subTitle(secondTextColor)}>
        {secondText}{' '}
      </Text>
    </View>
  );
};

export default AlreadyTextContainer;

const styles = StyleSheet.create({
  container: marginTop => ({
    flexDirection: 'row',
    marginTop: marginTop ? marginTop : verticalScale(20),

    justifyContent: 'space-between',

    marginHorizontal: scale(10),
  }),
});
