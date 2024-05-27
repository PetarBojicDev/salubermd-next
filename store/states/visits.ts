import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface VisitsState {
  pastVisits: Object[] | null,
  slots: Object[] | null,
  appointments: Object[] | null,
}

const initialState: VisitsState = {
  pastVisits: null,
  slots: null,
  appointments: null
}

export const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    setPastVisits: (state, action: PayloadAction<Object[]>) => {
      state.pastVisits = action?.payload;
    },
    setSlots: (state, action: PayloadAction<Object[]>) => {
      state.slots = action?.payload;
    },
    setAppointments: (state, action: PayloadAction<Object[]>) => {
      state.appointments = action?.payload
    }
  },
})

export const { setPastVisits, setSlots, setAppointments } = visitsSlice.actions

export default visitsSlice.reducer