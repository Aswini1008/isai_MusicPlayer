import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { NavLink } from 'react-router-dom';
import userAvatar from '../assests/coder.png'; // Ensure correct path

const Menu = () => {
  const { AuthUser, logout } = useContext(AuthContext);

  const Anonymus = () => (
    <ul className="flex gap-5 items-center">
      <li>
        <NavLink to="/login" className={({ isActive }) => `text-lg font-semibold px-4 py-2 rounded-md transition ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-200 hover:text-blue-300'}`}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={({ isActive }) => `text-lg font-semibold px-4 py-2 rounded-md transition ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-200 hover:text-blue-300'}`}>
          Register
        </NavLink>
      </li>
    </ul>
  );

  const Authenticated = () => (
    <ul className="flex gap-5 items-center">
      <NavLink to="/profile" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition">
      <img
  src={AuthUser?.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  alt="User Avatar"
  className="h-[40px] w-[40px] rounded-full border-2 border-blue-400 shadow-md"
/>

        <p className="text-blue-200 font-medium hidden md:block">{AuthUser?.displayName || "User"}</p>
      </NavLink>
      <li
        className="bg-red-500 text-white text-lg px-3 py-2 rounded-md cursor-pointer hover:bg-red-600 transition transform hover:scale-105"
        onClick={logout}
      >
        Logout
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-md py-4 px-6 sticky top-0 z-50 border-b border-gray-700">
      <ul className="flex gap-8 items-center justify-between">
        <NavLink to="/" className={({ isActive }) => `font-extrabold text-xl px-4 py-2 rounded-md transition ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-200 hover:text-blue-300'}`}>
          Home
        </NavLink>
        {AuthUser ? <Authenticated /> : <Anonymus />}
      </ul>
    </nav>
  );
};

export default Menu;
