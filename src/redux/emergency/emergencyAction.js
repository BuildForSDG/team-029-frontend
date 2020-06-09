import emergencyTypes from './emergencyType';
import axios from 'axios';

const { UPDATE_EMERGENCY, EMERGENCY_ERROR, REPORT_EMERGENCY, EMERGENCY_LOADING } = emergencyTypes;


const baseUri = `${process.env.REACT_APP_BASE_URI}/api/v1`;

export const reportEmergency = (details) => async dispatch => {
  dispatch({ type: EMERGENCY_LOADING });
  try {
    const { data } = await axios.post(`${baseUri}/accident/create`, details);
    console.log(data);
    dispatch({ type: REPORT_EMERGENCY, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EMERGENCY_ERROR, payload: error.message })
  }
}


export const updateEmergency = (update) => dispatch => {
  dispatch({ type: UPDATE_EMERGENCY, payload: update })
}