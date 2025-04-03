import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";

const AdminSidebar = () => {
  return (
<section className='w-[18%] min-h-[calc(100vh-75px)] bg-black text-slate-300 hover:text-black'>
<article>
  
  <NavLink to="/admin/addAlbum" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
  <div>
  <RiAdminFill className='text-3xl font-extrabold' />
  </div>
     <h1 className='text-2xl font-bold text-slate-200  hover:text-black'>CREATE ALBUM</h1>
     
  </NavLink >
  <NavLink to="/admin/addSongs" className="p-3 hover:bg-slate-400 w-full flex gap-2 items-center">
  <div>
  <MdLibraryMusic className='text-3xl font-extrabold' />
  </div>
     <h1 className='text-2xl font-bold text-slate-200  hover:text-black'>ADD SONGS</h1>
     
  </NavLink>
</article>
</section>
  )
}

export default AdminSidebar