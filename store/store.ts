import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from "./states/userInfo";
import initiativeReducer from "./states/initiative";
import languageReducer from "./states/language";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    initiative: initiativeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;