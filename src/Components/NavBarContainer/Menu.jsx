import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchProfileContext } from '../Context/FetchUserContext';

const Menu = () => {
  let { AuthUser, logout } = useContext(AuthContext);
  let { role } = useContext(fetchProfileContext);
  let location = useLocation(); // Get the current page path

  let Anonymus = () => {
    return (
      <section>
        <article>
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white hover:text-blue-400'}`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Register"
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white hover:text-blue-400'}`
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </article>
      </section>
    );
  };

  let Authenticated = () => {
    return (
      <>
        {role === 'admin' && (
          <NavLink to="/admin">
            <li
              className={`font-bold text-xl transition duration-300 ${
                location.pathname === '/' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-300 hover:text-blue-400'
              }`}
            >
              Admin
            </li>
          </NavLink>
        )}

        <section>
          <article>
            <ul className="flex gap-6 items-center">
              <NavLink to="/profile">
                <li className="flex items-center gap-3">
                  <img src={AuthUser.photoURL} className="h-[40px] w-[40px] rounded-full border-2 border-white" alt="User" />
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
          </article>
        </section>
      </>
    );
  };

  return (
    <nav className="w-full bg-gray-900 px-6 py-4 shadow-lg">
      <ul className="flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-extrabold text-2xl transition duration-300 ${
              isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-300 hover:text-blue-400'
            }`
          }
        >
          Home
        </NavLink>
        {AuthUser ? <Authenticated /> : <Anonymus />}
      </ul>
    </nav>
  );
};

export default Menu;
