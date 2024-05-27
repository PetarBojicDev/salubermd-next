import { combineReducers } from '@reduxjs/toolkit';
import userInfoReducer from "./states/userInfo";
import initiativeReducer from "./states/initiative";
import languageReducer from "./states/language";
import signUpReducer from './states/signup';
import visitsReducer from './states/visits';
import { clearState } from './states/clear';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  initiative: initiativeReducer,
  language: languageReducer,
  signUp: signUpReducer,
  visits: visitsReducer,
});

const appReducer = (state: ReturnType<typeof rootReducer> | undefined, action: any) => {
  if (action.type === clearState.type) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;