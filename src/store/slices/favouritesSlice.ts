import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewCocktail } from '../interfaces'

interface FavouritesState {
  favourites: NewCocktail[]
}

const initialState: FavouritesState = {
  favourites: [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites(state, action: PayloadAction<NewCocktail>) {
      const findItem = state.favourites.find(
        (obj) => obj.id === action.payload.id,
      )
      if (!findItem) {
        state.favourites.push({ ...action.payload })
      } else {
        alert('Already is in favourites')
      }
    },
    removeFromFavourites(state, action: PayloadAction<string | undefined>) {
      state.favourites = state.favourites.filter(
        (obj) => obj.id !== action.payload,
      )
    },
    clearFavourites(state) {
      state.favourites = []
    },
  },
})

export const favouritesActions = favouritesSlice.actions
export const favouritesReducer = favouritesSlice.reducer
