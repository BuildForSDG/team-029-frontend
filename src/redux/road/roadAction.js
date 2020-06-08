import roadTypes from './roadTypes';
import axios from 'axios';

const { ROAD_LOADING, ADD_ROAD, ROAD_ERROR, DELETE_ROAD, GET_ROAD } = roadTypes;
const baseUri = `${process.env.REACT_APP_BASE_URI}/api/v1`;

export const getRoads = () => async (dispatch) => {
  dispatch({ type: ROAD_LOADING });
  try {
    const res = await axios.get(`${baseUri}/road/all`);
    const { data: { data } } = res;
    return dispatch({ type: GET_ROAD, payload: data })
  } catch (error) {
    console.log(error);
    return dispatch({ type: ROAD_ERROR, payload: error.message })
  }
}

export const addRoad = (details) => async (dispatch) => {
  dispatch({ type: ROAD_LOADING });
  try {
    const res = await axios.post(`${baseUri}/road/create`, details);
    const { data: { data } } = res;
    console.log(data);
    return dispatch({ type: ADD_ROAD, payload: data })
  } catch (error) {
    console.log(error);
    return dispatch({ type: ROAD_ERROR, payload: error.message })
  }
}


//TODO: yet to be added to the backend API
export const deleteRoad = (roadId) => async (dispatch) => {
  dispatch({ type: ROAD_LOADING });
  try {
    //const res = await axios.delete("", roadId);
    //const { data } = res;
    return dispatch({ type: DELETE_ROAD, payload: roadId })
  } catch (error) {
    console.log(error);
    return dispatch({ type: ROAD_ERROR, payload: error.message })
  }
}