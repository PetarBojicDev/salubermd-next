import { combineReducers } from '@reduxjs/toolkit';
import userInfoReducer from "./states/userInfo";
import initiativeReducer from "./states/initiative";
import languageReducer from "./states/language";
import signUpReducer from './states/signup';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  initiative: initiativeReducer,
  language: languageReducer,
  signUp: signUpReducer,
});

export default rootReducer;