import { USER_KEY } from './consts'

export const getUserFromLS = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY) ?? '{}')

  return user
}
