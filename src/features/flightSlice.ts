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
    /*increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },*/
    takeSeat: (state, action: PayloadAction<[number, number, boolean]>) => {
      let temp = state[action.payload[0]].seats![action.payload[1]].available
      state[action.payload[0]].seats !== undefined ? temp : undefined
    }
  },
})

export const { takeSeat } = flightSlice.actions

export default flightSlice.reducer