import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {TextStyles} from '../../../constants/TextStyle';
import {Colors} from '../../../constants/Colors';

export const MessageListContainer = ({
  name,
  time,
  message,

  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <View style={styles.cotainer}> */}
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/D4D0BAQHzwf7LQ9CrVQ/company-logo_200_200/0/1664530166489?e=2147483647&v=beta&t=-ehztpenhVrMogibXtKbpS3oH8meA3VVDfa97tBwilU',
        }}
        style={styles.profilePicture}
      />

      <View style={styles.centerContainer}>
        <Text style={[TextStyles.title(Colors.primary)]}>{name}</Text>
        <Text
          numberOfLines={2}
          style={[TextStyles.subTitle(Colors.primary), {marginTop: 5}]}>
          {message}
        </Text>
      </View>
      <Text style={TextStyles.subTitle(Colors.primary)}>{time}</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    padding: scale(12),
    justifyContent: 'space-between',

    // justifyContent: 'space-around',
  },
  profilePicture: {
    // backgroundColor: 'black',
    borderRadius: 100,
    aspectRatio: 1 / 1,
    padding: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
  },
  centerContainer: {
    width: '60%',
    // backgroundColor: 'blue',
  },
  messageStyle: {
    position: 'absolute',
    // marginTop: -1,
    marginLeft: scale(105),
    marginTop: verticalScale(40),
    marginRight: scale(25),
  },
});
