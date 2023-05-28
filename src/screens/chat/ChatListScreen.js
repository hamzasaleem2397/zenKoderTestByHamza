import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {MessageListContainer} from '../../components/containers/message/ChatListContainer';
import {messageList} from '../../constants/StaticData';
import Icons from '../../components/commons/Icon';
import {moderateScale} from 'react-native-size-matters';
import AddChatModal from '../../components/modals/AddChatModal';

const ChatListScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AddChatModal
        visible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      />
      <FlatList
        data={messageList}
        renderItem={({item}) => {
          return (
            <MessageListContainer
              onPress={() => navigation.navigate('chat')}
              name={item.senderName}
              time={item.data}
              message={item.message}
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
