import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminContent = () => {
  return (
    <section className='basis-[82%]'>
     <Outlet/>
    </section>
  )
}

export default AdminContent