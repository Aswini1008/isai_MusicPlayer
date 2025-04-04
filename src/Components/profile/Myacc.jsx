import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { fetchProfileContext } from '../Context/FetchUserContext';
import { NavLink } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { FaUserSlash } from "react-icons/fa";
import { motion } from 'framer-motion';

const Myacc = () => {
  let { AuthUser } = useContext(AuthContext);
  let { profile } = useContext(fetchProfileContext);

  return (
    <section className='flex justify-center items-center mt-16 bg-gray-900 min-h-screen'>
      <motion.article 
        className='h-auto w-[60vw] bg-gray-800 border-2 border-blue-500 rounded-3xl shadow-lg p-6'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>

        {/* Header */}
        <header className='bg-gray-700 h-[87px] flex flex-col gap-3 justify-center items-center relative border-b-2 border-blue-500'>

          {/* Profile Image */}
          <div className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 flex justify-center w-full'>
            {AuthUser?.photoURL ? (
              <img 
                src={AuthUser?.photoURL} 
                alt="Profile" 
                className='h-[100px] w-[100px] rounded-full border-4 border-blue-500 shadow-lg object-cover hover:scale-105 transition duration-300'
              />
            ) : (
              <FaUserSlash className='text-gray-400 text-4xl' />
            )}
          </div>

          {/* User Details */}
          <div className='flex flex-col justify-center items-center text-xl text-blue-400 gap-2 font-bold mt-20'>
            <h1 className='p-2'>{AuthUser?.displayName || "Guest User"}</h1>
            <h1 className='text-sm'>{AuthUser?.email || "No Email Provided"}</h1>
            <NavLink 
              to={'/profile/AddProf'} 
              state={profile} 
              className='flex items-center gap-2 text-base text-blue-400 hover:text-blue-500 transition duration-300'>
              Edit <CiEdit className='h-[20px] w-[20px] text-blue-400' />
            </NavLink>
          </div>

        </header>

        {/* Profile Information */}
        <section className='flex flex-col items-center mt-16'>
          {profile ? (
            <section>
              <article>
                <form className='text-gray-300 font-medium flex flex-col gap-4 justify-center items-center border-2 border-blue-500 rounded-xl p-6'>

                  {/* Profile Fields */}
                  {[
                    { label: "Name", id: "name", type: "text", value: profile?.firstname + " " + profile?.lastname },
                    { label: "DOB", id: "dob", type: "date", value: profile?.dob },
                    { label: "City", id: "city", type: "text", value: profile?.city },
                    { label: "State", id: "state", type: "text", value: profile?.state },
                    { label: "Language", id: "language", type: "text", value: profile?.language },
                    { label: "Age", id: "age", type: "text", value: profile?.age }
                  ].map((field, index) => (
                    <article key={index} className='flex justify-between items-center bg-gray-800 p-2 rounded-lg w-[450px] border border-blue-500 hover:bg-gray-700 transition duration-300'>
                      <h1 className='font-bold text-sm text-blue-400'>{field.label}</h1>
                      <input 
                        type={field.type} 
                        className='border border-blue-500 rounded-md w-[220px] p-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-blue-500'
                        name={field.id}
                        id={field.id}
                        defaultValue={field.value || ""}
                        readOnly
                      />
                    </article>
                  ))}

                  {/* Address Field */}
                  <article className='flex justify-between items-center bg-gray-800 p-2 rounded-lg w-[450px] border border-blue-500 hover:bg-gray-700 transition duration-300'>
                    <h1 className='font-bold text-sm text-blue-400'>Address</h1>
                    <textarea 
                      className='border border-blue-500 rounded-md w-[220px] p-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-blue-500'
                      name='address'
                      id='address'
                      defaultValue={profile?.address || ""}
                      readOnly
                    ></textarea>
                  </article>
                </form>
              </article>
            </section>
          ) : (
            <div className='flex flex-col items-center text-center gap-3'>
              <h1 className='text-[28px] text-red-400 font-extrabold'>User not Found</h1>
              <FaUserSlash className='text-red-400 text-4xl' />
            </div>
          )}
        </section>
      </motion.article>
    </section>
  );
}

export default Myacc;
