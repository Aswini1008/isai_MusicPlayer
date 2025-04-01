import React from "react";
import { NavLink } from "react-router-dom";
import { MdAccountBox, MdBrowserUpdated } from "react-icons/md";
import { IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const ProfileSideBar = () => {
  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen 
                     bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900
                     text-gray-200 text-lg p-6 shadow-2xl">
      <nav>
        <ul className="flex flex-col gap-5">
          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ease-in-out
                 ${isActive ? "bg-blue-700 text-white shadow-lg" : "hover:bg-gray-700 hover:shadow-md"}`}
            >
              <MdAccountBox className="text-2xl" />
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/my-account"
              className={({ isActive }) => 
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ease-in-out
                 ${isActive ? "bg-blue-700 text-white shadow-lg" : "hover:bg-gray-700 hover:shadow-md"}`}
            >
              <FaUser className="text-2xl" />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/add-profile"
              className={({ isActive }) => 
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ease-in-out
                 ${isActive ? "bg-blue-700 text-white shadow-lg" : "hover:bg-gray-700 hover:shadow-md"}`}
            >
              <IoMdPersonAdd className="text-2xl" />
              Add Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/update-photo"
              className={({ isActive }) => 
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ease-in-out
                 ${isActive ? "bg-blue-700 text-white shadow-lg" : "hover:bg-gray-700 hover:shadow-md"}`}
            >
              <MdBrowserUpdated className="text-2xl" />
              Update Photo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/settings"
              className={({ isActive }) => 
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ease-in-out
                 ${isActive ? "bg-blue-700 text-white shadow-lg" : "hover:bg-gray-700 hover:shadow-md"}`}>
          
              <IoMdSettings className="text-2xl" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ProfileSideBar;
