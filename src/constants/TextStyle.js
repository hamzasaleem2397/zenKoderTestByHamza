import {moderateScale} from 'react-native-size-matters';
import {Colors} from './Colors';
import {StyleSheet} from 'react-native';
export const TextStyles = StyleSheet.create({
  title: (color = Colors.background, fontSize = moderateScale(18)) => ({
    color,
    fontWeight: 'bold',
    fontSize: fontSize,
  }),
  subTitle: (color = Colors.background, fontSize = moderateScale(15)) => ({
    color,
    fontSize,
  }),
});
