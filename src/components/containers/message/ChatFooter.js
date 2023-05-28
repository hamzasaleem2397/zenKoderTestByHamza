import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icons from '../../commons/Icon';
import {Colors} from '../../../constants/Colors';

const ChatFooter = () => {
  return (
    <View style={styles.footerContaier}>
      <View style={styles.footChildContainer}>
        <Icons type={'Feather'} name={'camera'} size={30} color={'white'} />
        <TextInput
          placeholder="Message"
          placeholderTextColor={Colors.primary}
          style={styles.textInput}
          multiline
        />
        <Icons
          type="FontAwesome"
          name="send"
          size={moderateScale(26)}
          color={'white'}
          style={{marginLeft: scale(5)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContaier: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    alignItems: 'center',
    paddingBottom: verticalScale(15),
    // marginBottom: 22,
  },
  textInput: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
    alignItems: 'center',
    width: '79%',
    borderRadius: 8,
    marginLeft: scale(10),
    // height: verticalScale(39.87),
    color: Colors.text,
  },
  footChildContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
    alignItems: 'center',
  },
});
export default ChatFooter;
