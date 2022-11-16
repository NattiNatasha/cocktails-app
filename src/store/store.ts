import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import { cocktailsApi } from './api/cocktailsApi'
import { favouritesReducer } from './slices/favouritesSlice'
import { authReducer } from './slices/authSlice'

export const store = configureStore({
  reducer: {
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    favourites: favouritesReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
