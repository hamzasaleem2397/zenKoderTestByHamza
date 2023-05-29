import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyle';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/buttons/CustomButton';
import {Logout} from '../../redux/action/AuthAction';
import {useDispatch, useSelector} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {authLoading} = useSelector(state => state.auth);
  const userDetails = useSelector(state => state.auth.authDetails);

  return (
    <View style={styles.container}>
      <Text style={TextStyles.title(Colors.primary, moderateScale(24))}>
        name:{userDetails.NAME}
      </Text>
      <Text style={TextStyles.title(Colors.primary, moderateScale(24))}>
        Email:{userDetails.EMAIL}
      </Text>
      <CustomButton
        title={'Logout'}
        loading={authLoading}
        onPress={() => dispatch(Logout())}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
