import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_KEY } from '../../utils/consts'
export interface AuthState {
  email: string | null
  token: string | null
}

const initialState: AuthState = {
  email: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; token: string }>,
    ) => {
      localStorage.setItem(
        USER_KEY,
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        }),
      )
      state.email = action.payload.email
      state.token = action.payload.token
    },
    logout: (state) => {
      localStorage.clear()
      state.email = null
      state.token = null
    },
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
