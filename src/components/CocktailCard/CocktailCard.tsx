import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { COCKTAIL_ROUTE } from '../../utils/consts'
import { NewFiltredCocktail } from '../../store/interfaces'

export const CocktailCard = ({ data }: { data: NewFiltredCocktail }) => {
  let navigate = useNavigate()
  return (
    <div className="box">
      <div className="image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="box-wrapper">
        <div className="box__content">
          <h3 className="box__title">Name: {data.name}</h3>
        </div>
        <div className="box__btn">
          <Button
            size={'small'}
            color={'black'}
            type="button"
            onClick={() => navigate(`${COCKTAIL_ROUTE}/${data.id}`)}
          >
            View recipe
          </Button>
        </div>
      </div>
    </div>
  )
}
