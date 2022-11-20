import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { COCKTAILS_BASE_URL } from '../../utils/consts'
import {
  Cocktails,
  NewCategory,
  Categories,
  NewCocktail,
  NewFiltredCocktail,
  FiltredCocktails,
} from '../interfaces'
import { transformResponseFromServer } from '../../utils/transformResponse'

export const cocktailsApi = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: COCKTAILS_BASE_URL,
  }),
  endpoints: (builder) => ({
    getStartCocktails: builder.query<NewCocktail[], void>({
      query: () => ({
        url: '/search.php?s=',
      }),
      transformResponse: (response: Cocktails) =>
        transformResponseFromServer(response.drinks),
    }),
    searchCocktails: builder.query<NewCocktail[], string | null>({
      query: (search: string) => ({
        url: '/search.php',
        params: {
          s: search,
        },
      }),
      transformResponse: (response: Cocktails) =>
        transformResponseFromServer(response.drinks),
    }),

    getAllCategories: builder.query<NewCategory[], void>({
      query: () => ({
        url: '/list.php?c=list',
      }),
      transformResponse: (response: Categories) =>
        response.drinks.map((drink) => ({
          data: drink,
          name: drink.strCategory,
        })),
    }),
    getFiltredCocktails: builder.query<NewFiltredCocktail[], string | null>({
      query: (c) => ({
        url: '/filter.php',
        params: {
          c: c,
        },
      }),
      transformResponse: (response: FiltredCocktails) =>
        response.drinks.map((drink) => ({
          data: drink,
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        })),
    }),
    getCocktailById: builder.query<NewCocktail[], number>({
      query: (id: number) => ({
        url: '/lookup.php',
        params: {
          i: id,
        },
      }),
      transformResponse: (response: Cocktails) =>
        transformResponseFromServer(response.drinks),
    }),
  }),
})

export const {
  useGetStartCocktailsQuery,
  useGetAllCategoriesQuery,
  useSearchCocktailsQuery,
  useLazySearchCocktailsQuery,
  useGetCocktailByIdQuery,
  useGetFiltredCocktailsQuery,
  useLazyGetFiltredCocktailsQuery,
} = cocktailsApi
