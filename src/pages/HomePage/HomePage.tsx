import { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CocktailCard } from '../../components/CocktailCard'
import { Slider } from '../../components/Slider'
import { Title } from '../../components/Title'
import { Filter } from '../../components/Filter'
import {
  useGetStartCocktailsQuery,
  useGetAllCategoriesQuery,
} from '../../store/api/cocktailsApi'
import './HomePage.scss'

export const HomePage = () => {
  let navigate = useNavigate()

  const { data: сocktails, isLoading, isError } = useGetStartCocktailsQuery()
  const { data: categories } = useGetAllCategoriesQuery()

  const [category, setCategory] = useState('')

  const selectCategory = (option: string) => {
    setCategory(option)
  }

  const params = { c: category }

  const gotoSearchPage = () => {
    navigate({
      pathname: '/search',
      search: '?' + createSearchParams(params),
    })
  }

  return (
    <>
      <Slider />
      <section className="filters">
        <Filter
          title={category || 'Select category'}
          data={categories}
          onClick={selectCategory}
        />
        <Button
          size={'medium'}
          color="orange"
          type="button"
          onClick={gotoSearchPage}
        >
          Search
        </Button>
      </section>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
      <section className="cocktails">
        <Title title="Popular" addition="cocktails" />
        <div className="box-container">
          {сocktails?.map((cocktail) => (
            <CocktailCard key={cocktail.id} data={cocktail} />
          ))}
        </div>
      </section>
    </>
  )
}
