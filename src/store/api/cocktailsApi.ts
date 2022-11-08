import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { COCKTAILS_BASE_URL } from '../../utils/consts'
import { ICocktails, ICocktail } from '../interfaces'

export const cocktailsApi = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: COCKTAILS_BASE_URL,
  }),
  endpoints: (builder) => ({
    getStartCocktails: builder.query<ICocktails, void>({
      query: () => ({
        url: '/search.php?s=',
      }),
    }),
    getCocktailById: builder.query<ICocktail, string>({
      query: (id) => ({
        url: `/lookup.php?i=${id}`,
      }),
    }),
  }),
})

export const {
  useGetStartCocktailsQuery,
  useGetCocktailByIdQuery,
} = cocktailsApi
