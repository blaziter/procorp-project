import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Reservation from '../types/Reservation'

export type reservationState = Reservation[]


const initialState: reservationState = [

]

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<Reservation[]>) => {
            action.payload.map(reservation => state.push(reservation))
        },
    },
})

export const { addReservation } = reservationSlice.actions

export default reservationSlice.reducer