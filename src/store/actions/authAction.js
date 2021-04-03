export const AUTH_USER_LOGIN = 'AUTH_USER_LOGIN';
export const AUTH_USER_LOGIN_SUCCESS = 'AUTH_USER_LOGIN_SUCCESS';
export const AUTH_USER_LOGIN_FAILED = 'AUTH_USER_LOGIN_FAILED';
export const AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT';

export const authLogIn = (user) => (dispatch) => dispatch({
  payload: user,
  type: AUTH_USER_LOGIN
});

export const authLogOut = () => (dispatch) => dispatch({
  type: AUTH_USER_LOGOUT
});
