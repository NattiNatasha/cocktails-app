import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button } from '../Button'
import {
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  FAVOURITES_ROUTE,
  HISTORY_ROUTE,
} from '../../utils/consts'
import './Header.scss'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useActions } from '../../hooks/useActions'

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  let navigate = useNavigate()

  const { logout, clearHistory, clearFavourites } = useActions()

  const handleLogout = () => {
    logout()
    clearHistory()
    clearFavourites()
    navigate(SIGNIN_ROUTE)
  }

  return (
    <header className="header">
      <div className="header__left">
        <Logo />
      </div>
      {!isAuth ? (
        <div className="header__right">
          <Link to={SIGNIN_ROUTE}>
            <Button size="medium" color="black" type="button">
              Sign in
            </Button>
          </Link>
          <Link to={SIGNUP_ROUTE}>
            <Button size="medium" color="black" type="button">
              Sign up
            </Button>
          </Link>
        </div>
      ) : (
        <div className="header__right">
          <ul className="header__right-list">
            <li>
              <Link to={FAVOURITES_ROUTE} className="header__right-link">
                Favourites
              </Link>
            </li>
            <li>
              <Link to={HISTORY_ROUTE} className="header__right-link">
                History
              </Link>
            </li>
          </ul>
          <Link to={SIGNIN_ROUTE}>
            <Button
              size="medium"
              color="black"
              type="button"
              onClick={() => handleLogout()}
            >
              Sign out
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
