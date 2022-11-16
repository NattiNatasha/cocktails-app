import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/slices/authSlice'
import { favouritesActions } from '../store/slices/favouritesSlice'

const actions = {
  ...favouritesActions,
  ...authActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
