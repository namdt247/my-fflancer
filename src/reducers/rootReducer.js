import { combineReducers } from 'redux';
import authReducer from './authReducer';
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  authReducer,
  accountReducer,
});

export default rootReducer;
