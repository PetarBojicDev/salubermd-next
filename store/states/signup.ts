import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ObjectProps {
  checkbox: string,
  config: object,
  esito: string,
  privacy: string,
  role: number,
  terms: string
}

export interface SignUpState {
  data: ObjectProps
}

const initialState: SignUpState = {
  data: {
    checkbox: "",
    config: {},
    esito: "",
    privacy: "",
    role: 0,
    terms: ""
  }
}

export const signUpSlice = createSlice({
  name: 'singUp',
  initialState,
  reducers: {
    saveSignUpInfo: (state, action: PayloadAction<ObjectProps>) => {
      state.data = action?.payload;
    }
  },
})

export const { saveSignUpInfo } = signUpSlice.actions

export default signUpSlice.reducer