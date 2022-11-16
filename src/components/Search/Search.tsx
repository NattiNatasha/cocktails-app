import { NewCocktail } from '../../store/interfaces'
import { Button } from '../Button'
import { Input } from '../Input'
import './Search.scss'

interface Props {
  search: string
  onChange: React.FormEventHandler<HTMLInputElement> | undefined
  isDropdownOpen: boolean
  gotoSearchPage: () => void
  isLoading: boolean
  isError: boolean
  searchCocktailHandler: (id: string) => void
  data: NewCocktail[] | undefined
}

export const Search = (props: Props) => {
  return (
    <div className="search">
      <Input
        placeholder="Search by cocktail's name"
        type="search"
        value={props.search}
        className={'input--large'}
        onChange={props.onChange}
      />
      <Button
        size={'medium'}
        color={'black'}
        type="button"
        onClick={props.gotoSearchPage}
      >
        Search
      </Button>
      {props.isDropdownOpen && (
        <ul className="dropdown">
          {props.isLoading && <p>Loading...</p>}
          {props.isError && <p>Something went wrong...</p>}
          {props.data?.map((cocktail) => (
            <li
              key={cocktail.id}
              onClick={() => props.searchCocktailHandler(cocktail.id)}
            >
              {cocktail.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
