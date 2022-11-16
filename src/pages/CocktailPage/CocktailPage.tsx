import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useGetCocktailByIdQuery } from '../../store/api/cocktailsApi'
import { Button } from '../../components/Button'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { SIGNIN_ROUTE } from '../../utils/consts'
import './CocktailPage.scss'

export const CocktailPage = () => {
  const { id } = useParams()
  const { email } = useAppSelector((state) => state.auth)

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const { data, isLoading, isError } = useGetCocktailByIdQuery(Number(id))

  const { addToFavourites } = useActions()

  const addFavourite = () => {
    addToFavourites(data!)
  }

  return (
    <div className="cocktail">
      <Button size={'large'} color={'black'} type="button" onClick={goBack}>
        Go back
      </Button>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
      {data && (
        <section className="cocktail-content">
          <div className="cocktail-content__img">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="cocktail-content__description">
            <h2>{data.name}</h2>
            <p>
              Category: <span>{data.category}</span>
            </p>
            <p>
              Type: <span>{data.type}</span>
            </p>
            <p>
              Glass: <span>{data.glass}</span>
            </p>
            <p>
              Instructions: <span>{data.instructions}</span>
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {data.ingredients.map((ingredient, index) => {
                  if (ingredient !== null) {
                    return (
                      <tr key={ingredient}>
                        <td>{ingredient}</td>
                        <td>{data.measures[index]}</td>
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
      {email ? (
        <Button
          size={'large'}
          color={'black'}
          type="button"
          onClick={addFavourite}
        >
          Add to favourites
        </Button>
      ) : (
        <Link to={SIGNIN_ROUTE}>
          <Button
            size={'large'}
            color={'black'}
            type="button"
            onClick={addFavourite}
          >
            Add to favourites
          </Button>
        </Link>
      )}
    </div>
  )
}
