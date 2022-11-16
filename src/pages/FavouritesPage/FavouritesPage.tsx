import { useAppSelector } from "../../hooks/useAppSelector"
import { Title } from "../../components/Title"
import { CocktailCard } from "../../components/CocktailCard"

export const FavouritesPage = () => {

  const {favourites} = useAppSelector(state => state.favourites)

  return (
    <>
      <section className="cocktails">
        <Title title="Your favourites" addition="cocktails" />
        {!favourites && <p>There are no any favourites recipes</p>}
        <div className="box-container">
          {favourites?.map((favourite) => (
            <CocktailCard key={favourite.id} data={favourite} />
          ))}
        </div>
      </section>
    </>
  )
}
