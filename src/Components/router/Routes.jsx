import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../auth/Login";
import Home from "../pages/Home";
import Register from "../auth/Register";
import Forgetpassword from "../ForgetPassword/Forgetpassword";
import ProfileContainer from "../profile/ProfileContainer"; 
import MyAccount from "../profile/MyAccount";
import AddProfile from "../profile/AddProfile";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgetpassword",
        element: <Forgetpassword />,
      },
      {
        path: "/profile",
        element: <ProfileContainer />,
        children: [
          {
            index: true, // Default route when "/profile" is visited
            element: <MyAccount />,
          },
          {
            path: "my-account", // Explicit path for clarity
            element: <MyAccount />,
          },
          {
            path: "add-profile",
            element: <AddProfile />,
          },
        ],
      },
    ],
  },
]);

export default myRoutes;
