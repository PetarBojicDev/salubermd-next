import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserIntoState {
  info: Object,
  onlineStatus: boolean,
  drawerOpenedStatus: boolean,
}

const initialState: UserIntoState = {
  info: {
    
  },
  onlineStatus: false,
  drawerOpenedStatus: false,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Object>) => {
      state.info = action?.payload;
    },
    setDoctorOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.onlineStatus = action?.payload;
    },
    setDrawerOpenedStatus: (state, action: PayloadAction<boolean>) => {
      state.drawerOpenedStatus = action?.payload;
    },
  },
})

export const { setDrawerOpenedStatus, setDoctorOnlineStatus, setUserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer