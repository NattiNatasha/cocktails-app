import { useAppSelector } from '../../hooks/useAppSelector'
import { useActions } from '../../hooks/useActions'
import { Title } from '../../components/Title'
import CocktailCard from '../../components/CocktailCard'
import './FavouritesPage.scss'

export const FavouritesPage = () => {
  const { removeFromFavourites } = useActions()
  const { favourites } = useAppSelector((state) => state.favourites)

  const removeFavourite = (id: string) => {
    removeFromFavourites(id)
    alert('Removed from favourites!')
  }

  return (
    <section className="cocktails favourites">
      <Title title="Your favourites" addition="cocktails" />
      {favourites.length < 1 && (
        <>
          <h2 className="no-favourites__title">
            There are no any favourites recipes
          </h2>
          <div className="no-favourites__img">
            <img
              src="https://cdn4.iconfinder.com/data/icons/yellow-cats-social-life/128/sad-128.png"
              alt="no favourites"
            />
          </div>
        </>
      )}
      <div className="box-container">
        {favourites?.map((favourite) => (
          <CocktailCard
            key={favourite.id}
            data={favourite}
            showButton={true}
            removeFavourite={() => removeFavourite(favourite.id)}
          />
        ))}
      </div>
    </section>
  )
}
