import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import flightsReducer from '../features/flightSlice'
import bookingReducer from '../features/bookingSlice'
import reservationReducer from '../features/reservationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    flights: flightsReducer,
    reservation: reservationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch