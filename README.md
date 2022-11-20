![slide_one](https://user-images.githubusercontent.com/93675664/202900859-a2a20bc0-8ef7-4916-8173-fcc6b5d28886.png)

# Cocktails App

## **Commands**:

- npm start (front)
- npm run auth (server: authorization & share in telegram)
- npm run sb (storybook)

## _Test data for login_:

- email: test@gmail.com
- password: 123456

## _Test search requests_:

- gin;
- margarita

## **1 уровень (необходимый минимум)**

- Реализованы Требования к функциональности, описанные в прикрепленном документе.

## React

- Пишем функциональные компоненты c хуками в приоритете над классовыми: [Pages](https://github.com/NattiNatasha/cocktails-app/tree/main/src/pages), [Components](https://github.com/NattiNatasha/cocktails-app/tree/main/src/components)
- Есть четкое разделение на умные и глупые компоненты. Пример умного: [SearchPage](https://github.com/NattiNatasha/cocktails-app/tree/main/src/pages/SearchPage), пример глупого: [CocktailCard](https://github.com/NattiNatasha/cocktails-app/blob/main/src/components/CocktailCard/CocktailCard.tsx)
- Есть рендеринг списков: [App](https://github.com/NattiNatasha/cocktails-app/blob/main/src/App.tsx), [HomePage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/HomePage/HomePage.tsx), [FavouritesPage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/FavouritesPage/FavouritesPage.tsx), [HistoryPage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/HistoryPage/HistoryPage.tsx)
- Реализована хотя бы одна форма: [SignInPage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/SignInPage/SignInPage.tsx), [SignUpPage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/SignUpPage/SignUpPage.tsx)
- Есть применение Контекст API: [TelegramContext](https://github.com/NattiNatasha/cocktails-app/tree/main/src/context), [CocktailPage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/CocktailPage/CocktailPage.tsx)
- Есть применение предохранителя: [HomePage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/CocktailPage/CocktailPage.tsx)
- Есть хотя бы один кастомный хук: [hooks](https://github.com/NattiNatasha/cocktails-app/tree/main/src/hooks)
- Хотя бы несколько компонентов используют PropTypes: [Button](https://github.com/NattiNatasha/cocktails-app/blob/main/src/components/Button/Button.tsx), [Input](https://github.com/NattiNatasha/cocktails-app/blob/main/src/components/Input/Input.tsx)
- Поиск не должен триггерить много запросов к серверу: [хук useDebounce](https://github.com/NattiNatasha/cocktails-app/blob/main/src/hooks/useDebounce.ts)
- Есть применение lazy + Suspense: [HomePage](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/CocktailPage/CocktailPage.tsx)

## Redux

- Используем Modern Redux with Redux Toolkit
- Используем слайсы: [slices](https://github.com/NattiNatasha/cocktails-app/tree/main/src/store/slices)
- Есть хотя бы одна кастомная мидлвара: [loggerMiddleware](https://github.com/NattiNatasha/cocktails-app/blob/main/src/loggerMiddleware.js)
- Используется RTK Query: [api](https://github.com/NattiNatasha/cocktails-app/tree/main/src/store/api)
- Используется Transforming Responses: [cocktailsApi](https://github.com/NattiNatasha/cocktails-app/blob/main/src/store/api/cocktailsApi.ts)

## **2 уровень (необязательный)**

- Использование TypeScript
- Подключен storybook и созданы несколько сторисов: [Button](https://github.com/NattiNatasha/cocktails-app/blob/main/src/components/Button/Button.stories.tsx)
- Реализована фича “Поделиться в телеграм”, закрытая под фича флагом: [server](https://github.com/NattiNatasha/cocktails-app/blob/main/server/server.js), [CocktailCard](https://github.com/NattiNatasha/cocktails-app/blob/main/src/pages/CocktailPage/CocktailPage.tsx)
