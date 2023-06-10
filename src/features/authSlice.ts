import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
    username: string,
    loggedIn: boolean,
    role: string,
}

const initialState: AuthState = {
    username: '',
    loggedIn: false,
    role: 'guest'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<[string, boolean]>) => {
            state.username = action.payload[0]
            state.loggedIn = action.payload[1]
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload
        }
    },
})

export const { setLoggedIn, setRole } = authSlice.actions

export default authSlice.reducer