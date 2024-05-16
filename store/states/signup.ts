import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SignUpState {
  data: Object,
}

const initialState: SignUpState = {
  data: {},
}

export const signUpSlice = createSlice({
  name: 'singUp',
  initialState,
  reducers: {
    saveSignUpInfo: (state, action: PayloadAction<Object>) => {
      state.data = action?.payload;
    }
  },
})

export const { saveSignUpInfo } = signUpSlice.actions

export default signUpSlice.reducer