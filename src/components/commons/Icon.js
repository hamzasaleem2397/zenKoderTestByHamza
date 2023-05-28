import {icons} from '../../utils/Icons';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
const Icons = ({
  type = AntDesign,
  name,
  color,
  size = moderateScale(22),
  style,
  onPress,
}) => {
  const MyIcon = icons[type];

  return (
    <View style={style}>
      <MyIcon
        name={name}
        color={color ? color : Colors.primary}
        size={size}
        onPress={onPress}
      />
    </View>
  );
};
export default Icons;
