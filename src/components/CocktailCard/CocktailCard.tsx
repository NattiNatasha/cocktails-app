import { useNavigate } from 'react-router-dom'
import { COCKTAIL_ROUTE } from '../../utils/consts'
import { NewFiltredCocktail } from '../../store/interfaces'
import { Button } from '../Button'

interface Props {
  data: NewFiltredCocktail
  showButton: boolean
  removeFavourite?: () => void
}

export const CocktailCard = (props: Props) => {
  let navigate = useNavigate()

  return (
    <div className="box">
      <div className="image">
        <img src={props.data.image} alt={props.data.name} />
      </div>
      <div className="box-wrapper">
        <div className="box__content">
          <h3 className="box__title">Name: {props.data.name}</h3>
        </div>
        <div className="box__btn">
          <Button
            size="small"
            color="black"
            type="button"
            onClick={() => navigate(`${COCKTAIL_ROUTE}/${props.data.id}`)}
          >
            View recipe
          </Button>
          {props.showButton && (
            <Button
              size="small"
              color="orange"
              type="button"
              onClick={props.removeFavourite}
            >
              Remove from favourites
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
