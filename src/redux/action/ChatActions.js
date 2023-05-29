import firestore from '@react-native-firebase/firestore';
import {CHAT, CHAT_LIST} from '../reducers/ChatReducer';

export const AddChat = (authId, userId, name) => {
  return async dispatch => {
    try {
      const userDetail = await firestore()
        .collection('Users')
        .doc(userId)
        .get();

      if (!userDetail.data()) {
        throw new Error('doesnt exist');
      }
      await firestore()
        .collection('conversation')
        .doc(authId)
        .update({
          [`parties.${userId}`]: userId,

          [`partiesInfo.${userId}`]: {
            name: userDetail.data().NAME,
          },
        });
      await firestore()
        .collection('conversation')
        .doc(userId)
        .update({
          [`parties.${authId}`]: authId,

          [`partiesInfo.${authId}`]: {
            name: name,
          },
        });
      dispatch(getChat(authId));
    } catch (error) {
      alert(error);
    }
  };
};

export const getChat = authId => {
  return async dispatch => {
    try {
      console.log(authId);
      const chatDetails = await firestore()
        .collection('conversation')
        .doc(authId)
        .get();
      console.log('==========>', chatDetails.data().partiesInfo);
      // if (!chatDetails.data()) {
      //   throw new Error('no Chat Data');
      // }
      if (chatDetails.data()) {
        const dataArray = Object.entries(chatDetails.data().partiesInfo).map(
          ([key, value]) => ({[key]: value}),
        );
        dispatch({type: CHAT_LIST, payload: dataArray});
      }
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
            .orderBy('CREATED_AT', 'asc')
            .get()
            .then(querySnapShot => {
              querySnapShot.forEach(documentSnapShot => {
                console.log(documentSnapShot.data());
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
      console.log('aaaa', authUser.USER_ID);
      await firestore()
        .collection('conversation')
        .doc(authUser.USER_ID)
        .collection('messages')
        .doc(otherUserId)
        .collection('message')
        .add({
          USER_ID: authUser.USER_ID,
          TEXT: textInput,
          CREATED_AT: new Date(),
        });
      await firestore()
        .collection('conversation')
        .doc(otherUserId)
        .collection('messages')
        .doc(authUser.USER_ID)
        .collection('message')
        .add({
          USER_ID: authUser.USER_ID,
          TEXT: textInput,
          CREATED_AT: new Date(),
        });
    } catch (error) {
      alert(error);
    }
  };
};
