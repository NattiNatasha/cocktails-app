import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/slices/authSlice'
import { favouritesActions } from '../store/slices/favouritesSlice'
import { historyActions } from '../store/slices/historySlice'

const actions = {
  ...favouritesActions,
  ...authActions,
  ...historyActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
