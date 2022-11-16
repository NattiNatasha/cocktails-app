import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LS_FAV_KEY } from '../../utils/consts'
import { NewCocktail } from '../interfaces'

interface Favourites {
  favourites: NewCocktail[]
}

const initialState: Favourites = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
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
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
      } else {
        alert('Already is in favourites')
      }
    },
  },
})

export const favouritesActions = favouritesSlice.actions
export const favouritesReducer = favouritesSlice.reducer
