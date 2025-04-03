// Menu.js
import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchProfileContext } from '../Context/FetchUserContext';

const NavItem = ({ to, label, isActive, extraClasses }) => (
  <li>
    <NavLink
      to={to}
      className={`font-medium transition duration-300 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white hover:text-blue-400'} ${extraClasses}`}
    >
      {label}
    </NavLink>
  </li>
);

const Authenticated = () => {
  const { AuthUser, logout } = useContext(AuthContext);
  const { role } = useContext(fetchProfileContext);
  const location = useLocation();

  return (
    <>
      {role === 'admin' && (
        <NavItem
          to="/admin"
          label="Admin"
          isActive={location.pathname === '/admin'}
          extraClasses="font-bold text-xl"
        />
      )}
      <ul className="flex gap-6 items-center">
        <NavLink to="/profile">
          <li className="flex items-center gap-3">
            <img src={AuthUser.photoURL} alt="User" className="h-[40px] w-[40px] rounded-full border-2 border-white" />
            <p className="text-white text-lg font-medium">{AuthUser.displayName}</p>
          </li>
        </NavLink>
        <li
          className="bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition duration-300 cursor-pointer"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </>
  );
};

const Anonymus = () => {
  const location = useLocation();

  return (
    <ul className="flex gap-6 items-center">
      <NavItem to="/Login" label="Login" isActive={location.pathname === '/Login'} />
      <NavItem to="/Register" label="Register" isActive={location.pathname === '/Register'} />
    </ul>
  );
};

const Menu = () => {
  const { AuthUser } = useContext(AuthContext);

  return (
    <nav className="w-full bg-gray-900 px-6 py-4 shadow-lg">
      <ul className="flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) => `font-extrabold text-2xl transition duration-300 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-300 hover:text-blue-400'}`}
        >
          Home
        </NavLink>
        {AuthUser ? <Authenticated /> : <Anonymus />}
      </ul>
    </nav>
  );
};

export default Menu;
