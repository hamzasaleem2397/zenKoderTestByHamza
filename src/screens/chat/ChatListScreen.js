import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {MessageListContainer} from '../../components/containers/message/ChatListContainer';
import {messageList} from '../../constants/StaticData';
import Icons from '../../components/commons/Icon';
import {moderateScale} from 'react-native-size-matters';
import AddChatModal from '../../components/modals/AddChatModal';
import {useDispatch, useSelector} from 'react-redux';
import {getChat} from '../../redux/action/ChatActions';

const ChatListScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {authDetails} = useSelector(state => state.auth);
  const {chatList} = useSelector(state => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChat(authDetails.USER_ID));
  }, []);
  console.log('chatttt====>', chatList);
  return (
    <View style={styles.container}>
      <AddChatModal
        visible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        setModalVisible={setModalVisible}
      />
      <FlatList
        data={chatList}
        renderItem={({item}) => {
          const [userId, userInfo] = Object.entries(item)[0];
          const name = userInfo.name;
          console.log('otheruser', userId);
          return (
            <MessageListContainer
              onPress={() => navigation.navigate('chat', {userId, name})}
              name={name}
              time={'2 min'}
              message={'no msges'}
            />
          );
        }}
        keyExtractor={() => Math.random()}
        showsVerticalScrollIndicator={false}
      />
      <Icons
        type="Ionicons"
        name="add-circle"
        size={moderateScale(60)}
        style={styles.addIcon}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  addIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});
