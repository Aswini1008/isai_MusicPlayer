import React from 'react'
import AdminSidebar from './AdminSidebar'
import AddAlbum from './AddAlbum'
import AddSongs from './AddSongs'
import AdminContent from './AdminContent'

const Admincontainer = () => {
  return (
    <section className='flex bg-blue-100 w-full h-[calc(100vh-75px)] '>
      <AdminSidebar/>
      <AdminContent/>
    </section>

  )
}

export default Admincontainer