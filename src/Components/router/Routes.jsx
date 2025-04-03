import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../auth/Login";
import Home from './../pages/Home';
import Register from './../auth/Register';
import Forgetpassword from "../ForgetPassword/Forgetpassword";
import ProfileContainer from "../profile/ProfileContainer";
import Myacc from "../profile/Myacc";
import AddProf from "../profile/AddProf";
import UpdateProfilephoto from "../profile/UpdateProfilephoto"
import Admincontainer from "../admin/Admincontainer";
import AddAlbum from "../admin/AddAlbum";
import AddSongs from "../admin/AddSongs";



let myRoutes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  {
    path:"/",
    element:<Home/>,
  },
  {
   path:"/Login",
   element:<Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
   path:"/Forgetpassword",
   element:<Forgetpassword/>
  },
  
  {
    path:"/profile",
    element:<ProfileContainer/>,
    children:[
      {
      index:true,
      element:<Myacc/>
    },
  {
  path:"AddProf",
  element:<AddProf/>
  },
{
  path:"updateprofilephoto",
  element:<UpdateProfilephoto/>
}

]},
{
  path:"/admin",
  element:<Admincontainer/>,
  children:[
    {
    //  index:true,
     path:"/admin/addAlbum",
     element:<AddAlbum/>
    },
    {
      path:"/admin/addSongs",
      element:<AddSongs/>
    },
  ]
}
],
},
]);

export default myRoutes;