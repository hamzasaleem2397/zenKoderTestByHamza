import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AUTH_DETAILS, AUTH_LOADING} from '../reducers/AuthReducer';
export const SignupUser = data => {
  return async dispatch => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log('res.user.uid : ', res.user.uid);
        if ('Users' != res.user.uid) {
          firestore().collection('Users').doc(res.user.uid).set({
            USER_ID: res.user.uid,
            NAME: data.name,
            EMAIL: data.email,
          });
          const userDetails = {
            USER_ID: res.user.uid,
            NAME: data.name,
            EMAIL: data.email,
          };
          dispatch({type: AUTH_DETAILS, payload: userDetails});
          AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
      });
  };
};
export const loginIN = user => {
  console.log('sign in : ', user);
  return async dispatch => {
    dispatch({type: AUTH_LOADING, payload: true});
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(user.email.toLowerCase(), user.password)
        .then(res => {
          // alert('User Is SignIn');

          firestore()
            .collection('Users')
            .doc(res.user.uid)
            .onSnapshot(documentSnapshot => {
              console.log(documentSnapshot.data());
              dispatch({type: AUTH_DETAILS, payload: documentSnapshot.data()});
              AsyncStorage.setItem(
                'userDetails',
                JSON.stringify(documentSnapshot.data()),
              );
              resolve((user = documentSnapshot.data()));
            });
          alert('Login Successfull');
        })
        .catch(error => {
          console.log('wrong', error);

          if (error.code === 'auth/wrong-password') {
            alert('Invalid Password');
          } else if (error.code === 'auth/user-not-found') {
            alert('user is not avalaible please sign up for sign in');
          } else if (error.code === 'auth/too-many-requests') {
            alert('Too many Requests Please wait');
          } else if (error.code === 'auth/network-request-failed') {
            console.log('error ');
            alert('You are offline');
          }
        })
        .finally(() => dispatch({type: AUTH_LOADING, payload: false}));
      // dispatch(Response('Login Successfull'));
    });
  };
};

export const Logout = user => {
  console.log('sign in : ', user);
  return async dispatch => {
    try {
      dispatch({type: AUTH_LOADING, payload: true});
      await auth().signOut();
      dispatch({type: AUTH_DETAILS, payload: ''});
      AsyncStorage.removeItem('userDetails');
    } catch (error) {
      console.log(error);
    }
    dispatch({type: AUTH_LOADING, payload: false});
  };
};
