import userTypes from './userTypes';
import axios from 'axios';

const { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, CLEAR_ERROR } = userTypes;

export const loginUser = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const { data: { data } } = await axios.post('/api/v1/auth/login', { email, password });
    return dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    return dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
}

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR });