import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/userReducer';

// selecting localstorage

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // what we want to persist
};

const rootReducer = combineReducers({
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
