import { useState, useEffect } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useSearchCocktailsQuery } from '../../store/api/cocktailsApi'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Search } from '../Search'
import {
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  COCKTAIL_ROUTE,
  FAVOURITES_ROUTE,
  HISTORY_ROUTE,
} from '../../utils/consts'
import './Header.scss'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useActions } from '../../hooks/useActions'

export const Header = () => {
  const { email } = useAppSelector((state) => state.auth)
  let navigate = useNavigate()
  const [search, setSearch] = useState('')

  const params = { s: search }

  const gotoSearchPage = () => {
    setIsDropdownOpen(false)
    setSearch('')
    navigate({
      pathname: '/search',
      search: '?' + createSearchParams(params),
    })
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const debounced = useDebounce(search)

  const { data, isLoading, isError } = useSearchCocktailsQuery(debounced, {
    skip: debounced.length < 1,
  })

  useEffect(() => {
    setIsDropdownOpen(debounced.length > 0 && data?.length! > 0)
  }, [debounced, data])

  const searchCocktailHandler = (id: string) => {
    setIsDropdownOpen(false)
    setSearch('')
    navigate(`${COCKTAIL_ROUTE}/${id}`)
  }

  const { logout } = useActions()

  const handleLogout = () => {
    logout()
    navigate(SIGNIN_ROUTE)
  }

  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <Search
          search={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          isDropdownOpen={isDropdownOpen}
          gotoSearchPage={gotoSearchPage}
          searchCocktailHandler={searchCocktailHandler}
          isLoading={isLoading}
          isError={isError}
          data={data}
        />
      </div>
      {!email ? (
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
              size={'medium'}
              color={'black'}
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
