import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdBrowserUpdated } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const ProfileSideBar = () => {
  return (
 
    <section className='basis-[18%] bg-black text-white text-2xl'>
      <nav>
        <ul className='flex flex-col p-1 cursor-pointer text-white'>
          <li>
            <NavLink to="/profile" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
           <span className='text-slate-500 text-3xl'>
             <MdAccountBox />
             </span>
             My Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/AddProf" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
           <span className='text-slate-500 text-3xl'>
             <IoMdPersonAdd />
             </span>
             
             Add Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/updateprofilephoto" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
           <span className='text-slate-500 text-3xl'>
           <MdBrowserUpdated />
             </span>
             Update Profile Photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
           <span className='text-slate-500 text-3xl'>
           <IoMdSettings />
             </span>
             Settings
            </NavLink>
          </li>

        </ul>
      </nav>
    </section>
  )
}

export default ProfileSideBar