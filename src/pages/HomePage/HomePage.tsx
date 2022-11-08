import { CocktailCard } from '../../components/CocktailCard'
import { Slider } from '../../components/Slider'
import { useGetStartCocktailsQuery } from '../../store/api/cocktailsApi'
import './HomePage.scss'

export const HomePage = () => {
  const { data: startCocktails, isLoading, error } = useGetStartCocktailsQuery()

  return (
    <>
      <Slider />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}
      <section className="cocktails">
        <div className="box-container">
          {startCocktails?.drinks.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} data={cocktail} />
          ))}
        </div>
      </section>
    </>
  )
}
