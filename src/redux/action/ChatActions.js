import firestore from '@react-native-firebase/firestore';
import {CHAT, CHAT_LIST} from '../reducers/ChatReducer';

export const AddChat = (authId, userId) => {
  return async dispatch => {
    try {
      const userDetail = await firestore()
        .collection('Users')
        .doc(userId)
        .get();
      console.log(userDetail.data());
      if (!userDetail.data()) {
        throw new Error('doesnt exist');
      }
      firestore()
        .collection('conversation')
        .doc(authId)
        .update({
          [`parties.${userId}`]: userId,

          [`partiesInfo.${userId}`]: {
            name: userDetail.data().NAME,
          },
        });
    } catch (error) {
      alert(error);
    }
  };
};

export const getChat = authId => {
  return async dispatch => {
    try {
      const chatDetails = await firestore()
        .collection('conversation')
        .doc(authId)
        .get();

      if (!chatDetails.data()) {
        throw new Error('no Chat Data');
      }
      dispatch({type: CHAT_LIST, payload: [chatDetails.data().partiesInfo]});
    } catch (error) {
      alert(error);
    }
  };
};
export const getMessage = (authId, otherUserId) => {
  return async dispatch => {
    try {
      firestore()
        .collection('conversation')
        .doc(authId)
        .collection('messages')
        .doc(otherUserId)
        .collection('message')
        .onSnapshot(snapShot => {
          let chats = [];
          console.log('shnccc', snapShot);
          firestore()
            .collection('conversation')
            .doc(authId)
            .collection('messages')
            .doc(otherUserId)
            .collection('message')
            // .orderBy('CREATED_AT', 'desc')
            .get()
            .then(querySnapShot => {
              querySnapShot.forEach(documentSnapShot => {
                // console.log(documentSnapShot.data());
                const {USER_ID: user_id, CREATED_AT} = {
                  ...documentSnapShot.data(),
                };
                let chatData = {
                  id: documentSnapShot.id,
                  ...documentSnapShot.data(),
                  CREATED_AT: new Date(
                    CREATED_AT.seconds * 1000,
                  ).toLocaleString('en-US', {
                    timeStyle: 'short',
                    dateStyle: 'short',
                  }),
                  // type: 'sender',
                };
                chats.push(chatData);
              });
              dispatch({type: CHAT, payload: chats});
              // setChatData(chats);
            });
        });
    } catch (error) {
      alert(error);
    }
  };
};
export const sendMessages = (authUser, otherUserId, textInput) => {
  return async dispatch => {
    try {
      firestore()
        .collection('conversation')
        .doc(authUser.USER_ID)
        .collection('messages')
        .doc(otherUserId)
        .collection('message')
        .add({
          USER_ID: authUser.USER_ID,
          EMAIL: authUser.EMAIL,
          TEXT: textInput,
          CREATED_AT: new Date(),
        });
    } catch (error) {
      alert(error);
    }
  };
};
