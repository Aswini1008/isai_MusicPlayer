import React from 'react'
import ProfileSideBar from './ProfileSideBar'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
  return (
    
    <section className='flex   bg-gradient-to-br from-gray-900 via-black to-blue-800 text-white h-full  w-full'>
    <ProfileSideBar/>
    <ProfileContent/>
    </section>
  )
}
``
export default ProfileContainer