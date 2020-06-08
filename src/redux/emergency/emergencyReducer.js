import emergencyTypes from './emergencyType';

const { UPDATE_EMERGENCY, EMERGENCY_ERROR, REPORT_EMERGENCY, EMERGENCY_LOADING } = emergencyTypes;


let initialState = {
  reports: [],
  reportLoading: false,
  reportError: null,
  reportSent: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMERGENCY:
      return {
        ...state,
        reports: action.payload,
        reportLoading: false,
        reportError: null
      }
    case REPORT_EMERGENCY:
      return {
        ...state,
        reportSent: true,
        reportLoading: false,
        reportError: false
      }
    case EMERGENCY_LOADING:
      return {
        ...state,
        reportLoading: true,
        reportSent: false
      }
    case EMERGENCY_ERROR:
      return {
        ...state,
        reportLoading: false,
        reportError: action.payload
      }
    default:
      return state
  }
}