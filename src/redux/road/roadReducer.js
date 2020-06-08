import roadTypes from './roadTypes';

const { ADD_ROAD, ROAD_ERROR, DELETE_ROAD, ROAD_LOADING, GET_ROAD } = roadTypes;

let initialState = {
  roads: [],
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROAD:
      return {
        ...state,
        loading: false,
        roads: action.payload.roads,
        error: null
      }
    case ADD_ROAD:
      return {
        ...state,
        loading: false,
        roads: [...state.roads, action.payload],
        error: null
      }
    case DELETE_ROAD:
      return {
        ...state,
        loading: false,
        roads: state.roads.filter(({ id }) => id !== action.payload)
      }
    case ROAD_LOADING:
      return {
        ...state,
        loading: true
      }
    case ROAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}