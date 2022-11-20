import { useAppSelector } from '../../hooks/useAppSelector'
import { useActions } from '../../hooks/useActions'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import './HistoryPage.scss'

export const HistoryPage = () => {
  const { history } = useAppSelector((state) => state.history)
  const { removeFromHistory } = useActions()

  const removeHistory = (index: string) => {
    removeFromHistory(index)
    alert('Removed from favourites!')
  }
  return (
    <section className="cocktails favourites">
      <Title title="Your search" addition="history" />
      {!history && <p>There are no history</p>}
      <ul className="history">
        {history.map((item) => (
          <li className="history__item" key={item.id}>
            <a href={item.url} target="_blank">
              {item.url}
            </a>
            <Button
              size="medium"
              color="orange"
              type="button"
              onClick={() => removeHistory(item.id)}
            >
              Remove from history
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
