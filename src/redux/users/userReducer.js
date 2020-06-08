import userTypes from './userTypes';

const { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, CLEAR_ERROR, LOGOUT_USER } = userTypes;

let initialState = {
  token: null,
  usersInfo: null,
  loginLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginLoading: true,
        error: null,
      }
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        usersInfo: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        token: action.payload.token,
        usersInfo: action.payload.user,
        error: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}