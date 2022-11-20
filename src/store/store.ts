import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from './api/authApi'
import { cocktailsApi } from './api/cocktailsApi'
import { favouritesReducer } from './slices/favouritesSlice'
import { authReducer } from './slices/authSlice'
import { historyReducer } from './slices/historySlice'
import { loggerMiddleware } from '../loggerMiddleware'

const rootReducer = combineReducers({
  [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  favourites: favouritesReducer,
  auth: authReducer,
  history: historyReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'favourites', 'history'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cocktailsApi.middleware, authApi.middleware, loggerMiddleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
