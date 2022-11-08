import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { COCKTAIL_ROUTE } from '../../utils/consts'
import { ICocktail } from '../../store/interfaces'

interface Props {
  data: ICocktail
}

export const CocktailCard: FC<Props> = ({ data }) => {
  let navigate = useNavigate()
  return (
    <div className="box">
      <div className="image">
        <img src={data.strDrinkThumb} alt={data.strDrink} />
      </div>
      <div className="box-wrapper">
        <div className="box__content">
          <h3 className="box__title">Name: {data.strDrink}</h3>
          <p>Category: {data.strCategory}</p>
          <p>Type: {data.strAlcoholic}</p>
          <p>Glass: {data.strGlass}</p>
        </div>
        <div className="box__btn">
          <Button
            size={'small'}
            color={'black'}
            type="button"
            onClick={() => navigate(COCKTAIL_ROUTE + '/' + data.idDrink)}
          >
            View recipe
          </Button>
        </div>
      </div>
    </div>
  )
}
