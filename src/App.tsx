import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, authRoutes } from './routes'
import { Layout } from './Layout'
import { HomePage } from './pages/HomePage'
import { useActions } from './hooks/useActions'
import { useAppSelector } from './hooks/useAppSelector'
import { getUserFromLS } from './utils/getUserFromLS'

function App() {
  const { setUser } = useActions()

  const user = getUserFromLS()
  const { email } = useAppSelector((state) => state.auth)

  useEffect(() => {
    setUser(user)
  }, [])
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {email &&
            authRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
