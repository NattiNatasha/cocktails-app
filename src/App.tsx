import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import { Layout } from './Layout'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
