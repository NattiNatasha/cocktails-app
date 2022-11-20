import { Route, Routes } from 'react-router-dom'
import { publicRoutes, authRoutes } from './routes'
import { useAppSelector } from './hooks/useAppSelector'
import { HomePage } from './pages/HomePage'
import { Layout } from './Layout'

function App() {
  const { isAuth } = useAppSelector((state) => state.auth)

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {isAuth &&
            authRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
