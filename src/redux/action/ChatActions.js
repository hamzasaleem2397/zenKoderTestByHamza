import firestore from '@react-native-firebase/firestore';

export const AddChat = (authId, userId) => {
  return async dispatch => {
    try {
      // const userDetail = await firestore()
      //   .collection('Users')
      //   .doc(userId)
      //   .get();
      // console.log(userDetail.data());
      // if (!userDetail.data()) {
      //   throw new Error('doesnt exist');
      // }
      firestore()
        .collection('conversation')
        .doc(authId)
        .update({
          [`parties.${userId}`]: userId,

          [`partiesInfo.${userId}`]: {
            name: 'hamza',
          },
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getChat = (authId, userId) => {
  return async dispatch => {
    try {
      // const userDetail = await firestore()
      //   .collection('Users')
      //   .doc(userId)
      //   .get();
      // console.log(userDetail.data());
      // if (!userDetail.data()) {
      //   throw new Error('doesnt exist');
      // }
      firestore()
        .collection('conversation')
        .doc(authId)
        .update({
          [`parties.${userId}`]: userId,

          [`partiesInfo.${userId}`]: {
            name: 'hamza',
          },
        });
    } catch (error) {
      console.log(error);
    }
  };
};
