import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../utils/consts'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        <Link to={SIGNIN_ROUTE}>
          <Button size={'medium'} color={'black'} type="button">
            Sign in
          </Button>
        </Link>
        <Link to={SIGNUP_ROUTE}>
          <Button size={'medium'} color={'black'} type="button">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  )
}
