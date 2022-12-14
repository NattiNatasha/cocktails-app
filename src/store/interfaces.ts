export interface Cocktails {
  drinks: Cocktail[]
}

export interface Categories {
  drinks: Category[]
}

export interface Category {
  strCategory: string
}

export interface NewCategory {
  name: string
}

export interface Cocktail {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string
  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: string | null
  strIngredient6: string | null
  strIngredient7: string | null
  strIngredient8: string | null
  strIngredient9: string | null
  strIngredient10: string | null
  strIngredient11: string | null
  strIngredient12: string | null
  strIngredient13: string | null
  strIngredient14: string | null
  strIngredient15: string | null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: string | null
  strMeasure6: string | null
  strMeasure7: string | null
  strMeasure8: string | null
  strMeasure9: string | null
  strMeasure10: string | null
  strMeasure11: string | null
  strMeasure12: string | null
  strMeasure13: string | null
  strMeasure14: string | null
  strMeasure15: string | null
}

export interface FiltredCocktails {
  drinks: FiltredCocktail[]
}

export interface FiltredCocktail {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
}

export interface NewFiltredCocktails {
  data: NewFiltredCocktail[]
}

export interface NewFiltredCocktail {
  id: string
  name: string
  image: string
}

export interface NewCocktails {
  drinks: NewCocktail[]
}

export interface NewCocktail {
  data: Cocktail | undefined
  id: string
  name: string
  category: string
  type: string
  glass: string
  image: string
  instructions: string
  ingredients: (string | null)[]
  measures: (string | null)[]
}

export interface User {
  email: string | null
  token: string | null
}
