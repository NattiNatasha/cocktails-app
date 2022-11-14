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
        response.drinks.map((drink) => ({
          data: drink,
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          type: drink.strAlcoholic,
          glass: drink.strGlass,
          image: drink.strDrinkThumb,
          instructions: drink.strInstructions,
          ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
          ],
          measures: [
            drink.strMeasure1,
            drink.strMeasure2,
            drink.strMeasure3,
            drink.strMeasure4,
            drink.strMeasure5,
            drink.strMeasure6,
            drink.strMeasure7,
            drink.strMeasure8,
            drink.strMeasure9,
            drink.strMeasure10,
            drink.strMeasure11,
            drink.strMeasure12,
            drink.strMeasure13,
            drink.strMeasure14,
            drink.strMeasure15,
          ],
        })),
    }),
    searchCocktails: builder.query<NewCocktail[], string | null>({
      query: (search: string) => ({
        url: '/search.php',
        params: {
          s: search,
        },
      }),
      transformResponse: (response: Cocktails) =>
        response.drinks.map((drink) => ({
          data: drink,
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          type: drink.strAlcoholic,
          glass: drink.strGlass,
          image: drink.strDrinkThumb,
          instructions: drink.strInstructions,
          ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
          ],
          measures: [
            drink.strMeasure1,
            drink.strMeasure2,
            drink.strMeasure3,
            drink.strMeasure4,
            drink.strMeasure5,
            drink.strMeasure6,
            drink.strMeasure7,
            drink.strMeasure8,
            drink.strMeasure9,
            drink.strMeasure10,
            drink.strMeasure11,
            drink.strMeasure12,
            drink.strMeasure13,
            drink.strMeasure14,
            drink.strMeasure15,
          ],
        })),
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
    getCocktailById: builder.query<NewCocktail, number>({
      query: (id: number) => ({
        url: '/lookup.php',
        params: {
          i: id,
        },
      }),
      transformResponse: (response: Cocktails) => ({
        data: response.drinks[0],
        id: response.drinks[0].idDrink,
        name: response.drinks[0].strDrink,
        category: response.drinks[0].strCategory,
        type: response.drinks[0].strAlcoholic,
        glass: response.drinks[0].strGlass,
        image: response.drinks[0].strDrinkThumb,
        instructions: response.drinks[0].strInstructions,
        ingredients: [
          response.drinks[0].strIngredient1,
          response.drinks[0].strIngredient2,
          response.drinks[0].strIngredient3,
          response.drinks[0].strIngredient4,
          response.drinks[0].strIngredient5,
          response.drinks[0].strIngredient6,
          response.drinks[0].strIngredient7,
          response.drinks[0].strIngredient8,
          response.drinks[0].strIngredient9,
          response.drinks[0].strIngredient10,
          response.drinks[0].strIngredient11,
          response.drinks[0].strIngredient12,
          response.drinks[0].strIngredient13,
          response.drinks[0].strIngredient14,
          response.drinks[0].strIngredient15,
        ],
        measures: [
          response.drinks[0].strMeasure1,
          response.drinks[0].strMeasure2,
          response.drinks[0].strMeasure3,
          response.drinks[0].strMeasure4,
          response.drinks[0].strMeasure5,
          response.drinks[0].strMeasure6,
          response.drinks[0].strMeasure7,
          response.drinks[0].strMeasure8,
          response.drinks[0].strMeasure9,
          response.drinks[0].strMeasure10,
          response.drinks[0].strMeasure11,
          response.drinks[0].strMeasure12,
          response.drinks[0].strMeasure13,
          response.drinks[0].strMeasure14,
          response.drinks[0].strMeasure15,
        ],
      }),
    }),
  }),
})

export const {
  useGetStartCocktailsQuery,
  useGetAllCategoriesQuery,
  useSearchCocktailsQuery,
  useGetCocktailByIdQuery,
  useGetFiltredCocktailsQuery,
} = cocktailsApi
