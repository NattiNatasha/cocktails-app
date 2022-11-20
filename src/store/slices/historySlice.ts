import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface History {
  id: string
  url: string
}

interface HistoryState {
  history: History[]
}

const initialState: HistoryState = {
  history: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<History>) {
      state.history.push(action.payload)
      // localStorage.setItem(HISTORY_KEY, JSON.stringify(state.history))
    },
    removeFromHistory(state, action: PayloadAction<string | undefined>) {
      state.history = state.history.filter((obj) => obj.id !== action.payload)
      // localStorage.setItem(HISTORY_KEY, JSON.stringify(state.history))
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const historyActions = historySlice.actions
export const historyReducer = historySlice.reducer
