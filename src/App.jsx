import React from 'react'
import { RouterProvider } from 'react-router-dom';
import NavBar from './Components/NavBarContainer/NavBar';
import myRoutes from './Components/router/Routes';
import ContextApi from './Components/Context/ContextApi';
import FetchUserContext from './Components/Context/FetchUserContext';



const App = () => {
  return (
    <div>
     
     <ContextApi>
  <FetchUserContext>
    <RouterProvider router={myRoutes}>
     <NavBar/>
      </RouterProvider>
      </FetchUserContext>
     </ContextApi>
    </div>
  )
}

export default App;