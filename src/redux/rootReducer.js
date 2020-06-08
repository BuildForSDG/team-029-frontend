import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/userReducer';
import roadReducer from './road/roadReducer';
import emergencyReducer from './emergency/emergencyReducer'

// selecting localstorage

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["user"] // what we want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  road: roadReducer,
  emergency: emergencyReducer
});

export default persistReducer(persistConfig, rootReducer);
