import { useState, useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  useGetAllCategoriesQuery,
  useLazySearchCocktailsQuery,
  useLazyGetFiltredCocktailsQuery,
} from '../../store/api/cocktailsApi'
import { COCKTAIL_ROUTE } from '../../utils/consts'
import { BASE_URL } from '../../utils/consts'
import { useDebounce } from '../../hooks/useDebounce'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Title } from '../../components/Title'
import CocktailCard from '../../components/CocktailCard'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import './SearchPage.scss'

export const SearchPage = () => {
  let navigate = useNavigate()
  const { isAuth } = useAppSelector((state) => state.auth)
  const { addToHistory } = useActions()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('s')
  const filterByCategory = searchParams.get('c')

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const debounced = useDebounce(search)

  const searchCocktailHandler = (id: string) => {
    setIsDropdownOpen(false)
    navigate(`${COCKTAIL_ROUTE}/${id}`)
  }

  const [
    fetchCocktails,
    { data, isLoading, isError },
  ] = useLazySearchCocktailsQuery()
  const [
    fetchFiltredCocktails,
    { data: filtredCocktails },
  ] = useLazyGetFiltredCocktailsQuery()
  const { data: categories } = useGetAllCategoriesQuery()

  const selectCategory = (option: string) => {
    setCategory(option)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (searchQuery) {
      fetchCocktails(searchQuery)
      setSearch(searchQuery)
    }
    if (filterByCategory) {
      fetchFiltredCocktails(filterByCategory)
      setCategory(filterByCategory)
    }
  }, [])

  useEffect(() => {
    if (debounced.length > 1) {
      setCategory('')
      setIsDropdownOpen(true)
      setSearchParams({ s: debounced })
      setSearch(debounced)
      fetchCocktails(debounced)
      setIsDropdownOpen(false)
    }
  }, [debounced, data])

  useEffect(() => {
    if (category) {
      setSearch('')
      setSearchParams({ c: category })
      setCategory(category)
      fetchFiltredCocktails(category)
    }
  }, [category, filtredCocktails])

  const location = useLocation()
  const url = `${BASE_URL}${location.pathname}${location.search}`
  const historyItem = {
    id: String(Math.random()),
    url: url,
  }

  useEffect(() => {
    data && isAuth && addToHistory(historyItem)
  }, [data])

  useEffect(() => {
    filtredCocktails && isAuth && addToHistory(historyItem)
  }, [filtredCocktails])

  return (
    <>
      {/* {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>} */}
      {!data && !filtredCocktails && (
        <h1>This recipe is not yet invented...</h1>
      )}
      <section className="filters-bar">
        <Search
          search={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          isDropdownOpen={isDropdownOpen}
          searchCocktailHandler={searchCocktailHandler}
          data={data}
          showButton={false}
        />
        <Filter
          title={category || 'Select category'}
          data={categories}
          onClick={selectCategory}
        />
      </section>
      <section className="cocktails search-results">
        <Title title="Search" addition="results" />
        <div className="box-container">
          {debounced &&
            data?.map((cocktail?) => (
              <CocktailCard
                key={cocktail.id}
                data={cocktail}
                showButton={false}
              />
            ))}
          {category &&
            filtredCocktails?.map((cocktail?) => (
              <CocktailCard
                key={cocktail.id}
                data={cocktail}
                showButton={false}
              />
            ))}
        </div>
      </section>
    </>
  )
}
