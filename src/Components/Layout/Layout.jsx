import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../NavBarContainer/NavBar';
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
    <Toaster/>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default Layout;