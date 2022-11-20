import { NewCategory } from '../../store/interfaces'
import { Button } from '../Button'
import './Filter.scss'

interface Props {
  title: string
  data: NewCategory[] | undefined
  onClick: (option: string) => void
}

export const Filter = (props: Props) => {
  return (
    <div className="filter">
      <Button type="button" color="black" size="large">
        {props.title}
      </Button>
      <div className="filter__content">
        {props.data?.map((option) => (
          <span onClick={() => props.onClick(option.name)} key={option.name}>
            {option.name}
          </span>
        ))}
      </div>
    </div>
  )
}
