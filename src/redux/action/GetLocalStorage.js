import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_DETAILS} from '../reducers/AuthReducer';

export const GetDataStorage = () => {
  return async dispatch => {
    const [userDetails] = await Promise.all([
      AsyncStorage.getItem('userDetails'),
    ]);
    const userDetailsParse = JSON.parse(userDetails);
    if (userDetailsParse != null) {
      dispatch({type: AUTH_DETAILS, payload: userDetailsParse});
    }
  };
};
