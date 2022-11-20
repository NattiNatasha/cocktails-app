import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  email: string
  token: string
  isAuth: boolean
}

const initialState: AuthState = {
  email: '',
  token: '',
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.isAuth = Boolean(action.payload.token)
    },
    logout: (state) => {
      state.email = ''
      state.token = ''
      state.isAuth = false
    },
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
