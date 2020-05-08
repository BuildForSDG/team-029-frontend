import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// selecting localstorage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // what we want to persist
};

const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
