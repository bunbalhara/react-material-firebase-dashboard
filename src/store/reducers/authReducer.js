import { AUTH_USER_LOGIN, AUTH_USER_LOGOUT } from '../actions/authAction';

const initialState = {
  loggedIn: false,
  user: {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '/images/avatars/default.png',
    bio: '',
    role: 'admin'
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_LOGIN: {
      return {...state, ...action.payload, loggedIn: true};
    }
    case AUTH_USER_LOGOUT: {
      return {
        ...initialState,
        loggedIn: false
      };
    }
    default: {
      return state;
    }
  }
};

export default sessionReducer;
