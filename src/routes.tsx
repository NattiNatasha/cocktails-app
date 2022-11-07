import { CocktailPage } from './pages/CocktailPage'
import { FavouritesPage } from './pages/FavouritesPage'
import { HistoryPage } from './pages/HistoryPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'

import {
  FAVOURITES_ROUTE,
  HISTORY_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  COCKTAIL_ROUTE,
  NOTFOUND_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: FAVOURITES_ROUTE,
    element: <FavouritesPage />,
  },
  {
    path: HISTORY_ROUTE,
    element: <HistoryPage />,
  },
]

export const publicRoutes = [
  {
    path: COCKTAIL_ROUTE + '/:id',
    element: <CocktailPage />,
  },
  {
    path: NOTFOUND_ROUTE,
    element: <NotFoundPage />,
  },
  {
    path: SIGNIN_ROUTE,
    element: <SignInPage />,
  },
  {
    path: SIGNUP_ROUTE,
    element: <SignUpPage />,
  },
]
