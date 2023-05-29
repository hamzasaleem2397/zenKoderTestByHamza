import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../constants/Colors';
import {verticalScale} from 'react-native-size-matters';
import {TextStyles} from '../../constants/TextStyle';
import ChatContainer from '../../components/containers/message/ChatContainer';
import {messages} from '../../constants/StaticData';
import ChatFooter from '../../components/containers/message/ChatFooter';
import {useDispatch, useSelector} from 'react-redux';
import {getMessage} from '../../redux/action/ChatActions';

const ChatScreen = ({route}) => {
  const {userId, name} = route.params;
  const {authDetails} = useSelector(state => state.auth);
  const {chats} = useSelector(state => state.chat);

  console.log('aaaa', userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage(authDetails.USER_ID, userId));
  }, [userId]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={TextStyles.title(Colors.background)}>{name}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={({item}) => {
          return (
            <ChatContainer
              message={item.message}
              time={item.date}
              senderType={item.sender}
              messageType={true}
            />
          );
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
      />
      <ChatFooter otherUserId={userId} />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  nameContainer: {
    backgroundColor: Colors.primary,

    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
});
