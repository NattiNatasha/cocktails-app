import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="nf">
        <h1 className="nf__title">404</h1>
        <p className="nf__text">Page Not Found</p>
        <Link to="/">
          <Button size={'large'} color={'black'} type="button">
            Return to Home Page
          </Button>
        </Link>
      </div>
    </div>
  )
}
