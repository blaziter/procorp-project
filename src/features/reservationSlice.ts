import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type reservationState = {
    
}

const initialState: reservationState = {
    seats: []
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<String>) => {
        },
    },
})

export const { addReservation } = reservationSlice.actions

export default reservationSlice.reducer