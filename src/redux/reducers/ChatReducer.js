// user management
export const CHAT_LIST = 'CHAT_LIST';
export const CHAT = 'CHAT';

const initial_state = {
  chatList: '',
  chats: '',
};

const ChatReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CHAT_LIST:
      return {
        ...state,
        chatList: action.payload,
      };
    case CHAT:
      return {
        ...state,
        chats: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default ChatReducer;
