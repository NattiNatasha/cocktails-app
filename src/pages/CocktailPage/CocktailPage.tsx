import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { useGetCocktailByIdQuery } from '../../store/api/cocktailsApi'
import { NewCocktail } from '../../store/interfaces'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { BASE_URL, SIGNIN_ROUTE } from '../../utils/consts'
import { TelegramContext } from '../../context/TelegramContext'
import { Button } from '../../components/Button'
import './CocktailPage.scss'

export const CocktailPage = () => {
  const { id } = useParams()
  const { isAuth } = useAppSelector((state) => state.auth)
  const { favourites } = useAppSelector((state) => state.favourites)
  const { featureFlag } = useContext(TelegramContext)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const { data, isLoading, isError } = useGetCocktailByIdQuery(Number(id))

  const { addToFavourites, removeFromFavourites, addToHistory } = useActions()

  const [isFav, setIsFav] = useState<NewCocktail | undefined | boolean>(
    favourites.find((el: { id: string }) => el.id === id),
  )

  const addFavourite = () => {
    if (isAuth) {
      addToFavourites(data![0])
      setIsFav(true)
      alert('Added to favourites!')
    } else {
      navigate(SIGNIN_ROUTE)
    }
  }

  const removeFavourite = () => {
    removeFromFavourites(id)
    setIsFav(false)
    alert('Removed from favourites!')
  }

  const url = `${BASE_URL}${pathname}`

  const historyItem = {
    id: String(Math.random()),
    url: url,
  }

  useEffect(() => {
    data && isAuth && addToHistory(historyItem)
  }, [data])

  return (
    <div className="cocktail">
      <div className="buttons">
        <Button size="large" color="black" type="button" onClick={goBack}>
          Go back
        </Button>
        {featureFlag && (
          <a href={`https://t.me/share/url?url=${url}`} target="_blank">
            <FaIcons.FaTelegram className="tg-icon" />
          </a>
        )}
        {!isFav ? (
          <Button
            size="large"
            color="black"
            type="button"
            onClick={addFavourite}
          >
            Add to favourites
          </Button>
        ) : (
          <Button
            size="large"
            color="orange"
            type="button"
            onClick={removeFavourite}
          >
            Remove from favourites
          </Button>
        )}
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
      {data && (
        <section className="cocktail-content">
          <div className="cocktail-content__img">
            <img src={data[0].image} alt={data[0].name} />
          </div>
          <div className="cocktail-content__description">
            <h2>{data[0].name}</h2>
            <p>
              Category: <span>{data[0].category}</span>
            </p>
            <p>
              Type: <span>{data[0].type}</span>
            </p>
            <p>
              Glass: <span>{data[0].glass}</span>
            </p>
            <p>
              Instructions: <span>{data[0].instructions}</span>
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {data[0].ingredients.map((ingredient, index) => {
                  if (ingredient !== null) {
                    return (
                      <tr key={ingredient}>
                        <td>{ingredient}</td>
                        <td>{data[0].measures[index]}</td>
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
