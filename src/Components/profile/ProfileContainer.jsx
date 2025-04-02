import React from 'react'
import ProfileSideBar from './ProfileSideBar'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
  return (
    
    <section className='flex bg-gradient-to-l bg-blue-200 h-[180vh] w-full '>
    <ProfileSideBar/>
    <ProfileContent/>
    </section>
  )
}
``
export default ProfileContainer