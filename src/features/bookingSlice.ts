import { createSlice } from '@reduxjs/toolkit'
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
        addSeat: (state, action: PayloadAction<Booking[]>) => {
            const temp = state.seats
            console.log(action.payload)
            temp.push(...action.payload)
            state.seats = temp
            console.log(Object.values(state.seats))
        },
        removeSeat: (state, action: PayloadAction<Booking>) => {
            console.log(action.payload)
            const temp = state.seats.filter(seat => action.payload.flightId !== seat.flightId && action.payload.seatId !== seat.seatId)
            state.seats = temp
            console.log(Object.values(state.seats))
        }
    },
})

export const { addSeat, removeSeat } = bookingSlice.actions

export default bookingSlice.reducer