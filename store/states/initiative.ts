import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitiativeState {
  info: Object,
}

const initialState: InitiativeState = {
  info: {},
}

export const initiativeSlice = createSlice({
  name: 'initiative',
  initialState,
  reducers: {
    setInitiative: (state, action: PayloadAction<Object>) => {
      state.info = action?.payload;
    }
  },
})

export const { setInitiative } = initiativeSlice.actions

export default initiativeSlice.reducer