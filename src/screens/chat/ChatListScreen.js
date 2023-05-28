import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {MessageListContainer} from '../../components/containers/message/ChatListContainer';
import {messageList} from '../../constants/StaticData';

const ChatListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
