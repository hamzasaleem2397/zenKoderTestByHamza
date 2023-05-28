import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {scale, verticalScale} from 'react-native-size-matters';

import {TextStyles} from '../../../constants/TextStyle';
import {Colors} from '../../../constants/Colors';

const ChatContainer = ({message, time, senderType}) => {
  return (
    <View>
      {/* {setMessageType(type)} */}
      <View style={styles.conatiner(senderType)}>
        <Image
          resizeMode="center"
          source={require('../../../assets/images/zenkoderLogo.png')}
          style={styles.imageStyle(senderType)}
        />

        <View style={styles.message(senderType)}>
          <Text style={[TextStyles.subTitle(Colors.text)]}>{message}</Text>
          <Text
            style={[
              TextStyles.subTitle(Colors.text),
              {textAlign: 'right', paddingRight: scale(10)},
            ]}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: type => ({
    flexDirection: type ? 'row' : 'row-reverse',
    paddingVertical: verticalScale(10),
    alignItems: 'center',
  }),

  imageStyle: type => ({
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 100,
    aspectRatio: 1 / 1,
    // marginTop: verticalScale(12),
    marginLeft: scale(10),
    marginRight: type == 'receiver' ? scale(15) : scale(0),
    alignItems: 'center',
  }),

  message: type => ({
    backgroundColor: type ? Colors.secondary : Colors.primary,

    width: '80%',
    marginLeft: scale(12),
    borderRadius: 8,
    paddingLeft: scale(12),
    paddingVertical: verticalScale(5),
    // marginBottom: verticalScale(23),
  }),
});

export default ChatContainer;
