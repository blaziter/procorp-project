import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initialData from '../assets/LRfGdcJx.json'
import FlightsProps from '../types/Flights'

export type FlightsState = Omit<FlightsProps, 'children' | 'title'>;

const initialState: FlightsState[] = initialData

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    takeSeat: (state, action: PayloadAction<[number, number, boolean]>) => {
      let temp = state[action.payload[0]].seats![action.payload[1]].available
      state[action.payload[0]].seats !== undefined ? temp : undefined
    }
  },
})

export const { takeSeat } = flightSlice.actions

export default flightSlice.reducer