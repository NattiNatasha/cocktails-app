import { useState, useEffect } from 'react'
import { Suspense, lazy } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { COCKTAIL_ROUTE } from '../../utils/consts'
import {
  useGetStartCocktailsQuery,
  useGetAllCategoriesQuery,
  useSearchCocktailsQuery,
} from '../../store/api/cocktailsApi'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { Button } from '../../components/Button'
import { Slider } from '../../components/Slider'
import { Title } from '../../components/Title'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import './HomePage.scss'

const CocktailCard = lazy(() => import('../../components/CocktailCard'))

export const HomePage = () => {
  let navigate = useNavigate()

  const { data: сocktails } = useGetStartCocktailsQuery()
  const { data: categories } = useGetAllCategoriesQuery()

  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

  const selectCategory = (option: string) => {
    setCategory(option)
  }

  const params = { s: search, c: category }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const debounced = useDebounce(search)

  const { data } = useSearchCocktailsQuery(debounced, {
    skip: debounced.length < 1,
  })

  useEffect(() => {
    setIsDropdownOpen(debounced.length > 0 && data?.length! > 0)
  }, [debounced, data])

  const searchCocktailHandler = (id: string) => {
    setIsDropdownOpen(false)
    navigate(`${COCKTAIL_ROUTE}/${id}`)
  }

  const gotoSearchPage = () => {
    setIsDropdownOpen(false)
    navigate({
      pathname: '/search',
      search: '?' + createSearchParams(params),
    })
  }

  return (
    <>
      <ErrorBoundary>
        <Slider />
        <section className="filters">
          <Search
            search={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            isDropdownOpen={isDropdownOpen}
            gotoSearchPage={gotoSearchPage}
            searchCocktailHandler={searchCocktailHandler}
            data={data}
            showButton={true}
          />
          <Filter
            title={category || 'Select category'}
            data={categories}
            onClick={selectCategory}
          />
          <Button
            size="medium"
            color="orange"
            type="button"
            onClick={gotoSearchPage}
          >
            Search
          </Button>
        </section>
        <section className="cocktails">
          <Title title="Popular" addition="cocktails" />
          <div className="box-container">
            <Suspense fallback={<div>Загрузка...</div>}>
              {сocktails?.map((cocktail) => (
                <CocktailCard
                  key={cocktail.id}
                  data={cocktail}
                  showButton={false}
                />
              ))}
            </Suspense>
          </div>
        </section>
      </ErrorBoundary>
    </>
  )
}
