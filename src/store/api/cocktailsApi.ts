import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { COCKTAILS_BASE_URL } from '../../utils/consts'
import { ICocktails, ICocktail } from '../interfaces'

export const cocktailsApi = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: COCKTAILS_BASE_URL,
  }),
  endpoints: (builder) => ({
    getStartCocktails: builder.query<ICocktail[], void | string>({
      query: (search: string | '') => ({
        url: '/search.php',
        params: {
          s: search,
        },
      }),
      transformResponse: (response: ICocktails) => response.drinks,
    }),
    getCocktailById: builder.query<ICocktail, number>({
      query: (id: number) => ({
        url: '/lookup.php',
        params: {
          i: id,
        },
      }),
      transformResponse: (response: ICocktails) => response.drinks[0],
    }),
  }),
})

export const {
  useGetStartCocktailsQuery,
  useGetCocktailByIdQuery,
} = cocktailsApi
