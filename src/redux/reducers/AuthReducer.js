// user management
export const AUTH_DETAILS = 'AUTH_DETAILS';
export const AUTH_LOADING = 'AUTH_LOADING';

const initial_state = {
  authDetails: '',
  authLoading: false,
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case AUTH_DETAILS:
      return {
        ...state,
        authDetails: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
