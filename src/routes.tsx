import { CocktailPage } from './pages/CocktailPage'
import { SearchPage } from './pages/SearchPage'
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
  SEARCH_ROUTE,
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
    path: SEARCH_ROUTE,
    element: <SearchPage />,
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
