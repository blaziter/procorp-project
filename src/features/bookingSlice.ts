import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Booking from '../types/Booking'

export type BookingState = {
  seats: Booking[]
}

const initialState: BookingState = {
  seats: []
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<Booking>) => {
      const temp = state.seats
      temp.push(action.payload)
      state.seats = temp
    },
    removeSeat: (state, action: PayloadAction<Booking>) => {
      const result = [...state.seats]
      result.splice(current(state.seats).findIndex(seat => seat.seatId == action.payload.seatId && seat.flightId == action.payload.flightId), 1)
      return { ...state, seats: result }
    }
  },
})

export const { addSeat, removeSeat } = bookingSlice.actions

export default bookingSlice.reducer