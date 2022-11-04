import { CocktailPage } from './pages/CocktailPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HistoryPage } from './pages/HistoryPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'

import {
  FAVORITES_ROUTE,
  HISTORY_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  COCKTAIL_ROUTE,
  NOTFOUND_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: FAVORITES_ROUTE,
    element: <FavoritesPage />,
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
