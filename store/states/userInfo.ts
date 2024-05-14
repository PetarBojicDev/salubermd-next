import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserIntoState {
  info: Object,
}

const initialState: UserIntoState = {
  info: {},
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Object>) => {
      state.info = action?.payload;
    }
  },
})

export const { setUserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer