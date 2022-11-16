import { useState, useEffect } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useSearchCocktailsQuery } from '../../store/api/cocktailsApi'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Search } from '../Search'
import { SIGNIN_ROUTE, SIGNUP_ROUTE, COCKTAIL_ROUTE } from '../../utils/consts'
import './Header.scss'

export const Header = () => {
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
