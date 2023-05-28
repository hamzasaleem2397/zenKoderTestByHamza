import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constants/Colors';
import CustomButton from '../buttons/CustomButton';
import Input from '../inputField/Input';
import {useForm} from 'react-hook-form';
// import {Colors} from '../../constant/Colors';

const AddChatModal = ({visible, onBackButtonPress, onBackdropPress, title}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    mode: 'all',
  });
  return (
    <Modal
      style={styles.modalContainer}
      visible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}>
      <View style={styles.taskCardContainer}>
        <Input
          name="email"
          inputLabel="User ID"
          control={control}
          borderColor={Colors.primary}
          rules={{
            required: 'email is required',
          }}
          // style={{marginTop: 20}}
          placeholder="Enter User Id"
        />
        {errors.email && (
          <Text style={styles.errormessage}>{errors.email.message}</Text>
        )}
        <CustomButton title={'Add user'} marginBottom={verticalScale(15)} />
      </View>
    </Modal>
  );
};

export default AddChatModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginHorizontal: 0,
    borderWidth: 0,
    margin: 0,
    justifyContent: 'center',
  },
  taskCardContainer: {
    marginTop: verticalScale(30),
    backgroundColor: Colors.background,

    // alignItems: 'center',
    marginHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    borderRadius: moderateScale(20),
  },
  text: {
    // color: Colors.black,
    fontSize: moderateScale(14),
    width: '68%',
    lineHeight: verticalScale(15),
    color: Colors.primary,
  },
});
