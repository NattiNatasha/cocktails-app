import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  useGetFiltredCocktailsQuery,
  useSearchCocktailsQuery,
  useGetAllCategoriesQuery,
} from '../../store/api/cocktailsApi'
import { Title } from '../../components/Title'
import { CocktailCard } from '../../components/CocktailCard'
import { Filter } from '../../components/Filter'
import './SearchPage.scss'

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('s')

  const { data, isLoading, isError } = useSearchCocktailsQuery(searchQuery)
  const filterByCategory = searchParams.get('c')

  const { data: filtredCocktails } = useGetFiltredCocktailsQuery(
    filterByCategory,
  )
  const { data: categories } = useGetAllCategoriesQuery()

  const [category, setCategory] = useState('')

  const selectCategory = (option: string) => {
    setSearchParams({ c: option })
    setCategory(option)
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
      {!data && !filtredCocktails && (
        <h1>This recipe is not yet invented...</h1>
      )}
      <section className="filters-bar">
        <Filter
          title={category || 'Select category'}
          data={categories}
          onClick={selectCategory}
        />
      </section>
      <section className="cocktails search-results">
        <Title title="Search" addition="results" />
        <div className="box-container">
          {data?.map((cocktail?) => (
            <CocktailCard key={cocktail.id} data={cocktail} />
          ))}
          {filtredCocktails?.map((cocktail?) => (
            <CocktailCard key={cocktail.id} data={cocktail} />
          ))}
        </div>
      </section>
    </>
  )
}
