import userTypes from './userTypes';
import axios from 'axios';
import setAuthToken from '../../util/setAuthToken';

const { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, CLEAR_ERROR, LOGOUT_USER } = userTypes;

export const loginUser = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  const baseUri = process.env.REACT_APP_BASE_URI;
  try {
    const { data: { data } } = await axios.post(`${baseUri}/api/v1/auth/login`, { email, password });
    setAuthToken(data.token);
    return dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    return dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
}


export const logOutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER })
}

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR });