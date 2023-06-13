import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initialData from '../assets/LRfGdcJx.json'
import FlightsProps from '../types/Flights'

export type FlightsState = Omit<FlightsProps, 'children' | 'title'>;

const initialState: FlightsState[] = initialData

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    takeSeat: (state, action: PayloadAction<{ flightId?: number, seatId?: number, take: boolean }>) => {
      let flightIndex = state?.findIndex(flight => flight.id == action.payload.flightId)
      if (flightIndex > -1) {
        let seatIndex = state[flightIndex].seats?.findIndex(seat => seat.id == action.payload.seatId)
        state[flightIndex!].seats![seatIndex!].available = !action.payload.take
      }
    }
  },
})

export const { takeSeat } = flightSlice.actions

export default flightSlice.reducer