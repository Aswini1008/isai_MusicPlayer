import React from 'react'
import { RouterProvider } from 'react-router-dom';
import NavBar from './Components/NavBarContainer/NavBar';
import myRoutes from './Components/router/Routes';
import ContextApi, { AuthContext } from './Components/Context/ContextApi';



const App = () => {
  return (
    <div>
     
     <ContextApi>
     <RouterProvider router={myRoutes}>
     <NavBar/>
      </RouterProvider>
      
     </ContextApi>
    </div>
  )
}

export default App;