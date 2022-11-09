import { useParams, useNavigate } from 'react-router-dom'
import { useGetCocktailByIdQuery } from '../../store/api/cocktailsApi'
import { Button } from '../../components/Button'
import './CocktailPage.scss'

export const CocktailPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const { data, isLoading, error } = useGetCocktailByIdQuery(Number(id))

  return (
    <div className="cocktail">
      <Button size={'large'} color={'black'} type="button" onClick={goBack}>
        Go back
      </Button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}
      {data && (
        <section className="cocktail-content">
          <div className="cocktail-content__img">
            <img src={data.strDrinkThumb} alt={data.strDrink} />
          </div>
          <div className="cocktail-content__description">
            <h2>{data.strDrink}</h2>
            <p>
              Category: <span>{data.strCategory}</span>
            </p>
            <p>
              Type: <span>{data.strAlcoholic}</span>
            </p>
            <p>
              Glass: <span>{data.strGlass}</span>
            </p>
            <p>
              Instructions: <span>{data.strInstructions}</span>
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  if (
                    key.includes('Ingredient') &&
                    data[key as keyof typeof data]
                  ) {
                    return (
                      <tr key={key}>
                        <td>{data[key as keyof typeof data]}</td>
                        <td>
                          {
                            data[
                              `strMeasure${key.slice(13)}` as keyof typeof data
                            ]
                          }
                        </td>
                      </tr>
                    )
                  }
                  return null
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}
