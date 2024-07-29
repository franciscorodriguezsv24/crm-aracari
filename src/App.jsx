import { BrowserRouter, useRoutes } from 'react-router-dom'

import './App.css'
import Admin from './pages/Admin'
import Calendar from './pages/Calendar'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Tasks from './pages/Tasks'
import Users from './pages/Users'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Login/> },
    {path:'/admin', element: <Admin/>},
    {path:'/calendar', element: <Calendar/>},
    {path:'/users', element: <Users/>},
    {path:'/tasks', element: <Tasks/>},
    {path:'/*', element: <NotFound/>},
  ])

  return routes
}

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App