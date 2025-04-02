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
    <section className='flex justify-center items-center mt-16'>
      <motion.article 
        className='h-[140vh] w-[60vw] bg-white/10 backdrop-blur-lg border border-blue-500 rounded-3xl shadow-2xl relative p-6'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>

        {/* Header */}
        <header className='bg-slate-800 h-[87px] flex flex-col gap-3 justify-center items-center relative'>

          {/* Profile Image */}
          <div className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 flex justify-center w-full'>
            <img 
              src="https://cdn.pixabay.com/photo/2024/01/24/11/33/ai-generated-8529420_1280.png" 
              alt="Profile" 
              className='h-[100px] w-[100px] rounded-full border-4 border-white shadow-lg object-cover'
            />
          </div>

          {/* User Details */}
          <div className='flex flex-col justify-center items-center text-xl text-blue-300 gap-2 font-bold mt-20'>
            <h1 className='p-2'>{AuthUser?.displayName || "Guest User"}</h1>
            <h1 className='text-sm'>{AuthUser?.email || "No Email Provided"}</h1>
            <NavLink 
              to={'/profile/AddProf'} 
              state={profile} 
              className='flex items-center gap-2 text-base text-blue-400 hover:text-blue-600'>
              Edit <CiEdit className='h-[20px] w-[20px] text-white' />
            </NavLink>
          </div>

        </header>

        {/* Profile Information */}
        <section className='flex flex-col items-center mt-[100px]'>
          {profile ? (
            <section>
              <article>
                <form className='text-slate-400 font-medium flex flex-col gap-4 justify-center items-center border border-blue-400 rounded-xl p-6 bg-white/10 backdrop-blur-lg'>

                  {/* Profile Fields */}
                  {[
                    { label: "Name", id: "name", type: "text", value: profile?.firstname + " " + profile?.lastname },
                    { label: "DOB", id: "dob", type: "date", value: profile?.dob },
                    { label: "City", id: "city", type: "text", value: profile?.city },
                    { label: "State", id: "state", type: "text", value: profile?.state },
                    { label: "Language", id: "language", type: "text", value: profile?.language },
                    { label: "Age", id: "age", type: "text", value: profile?.age }
                  ].map((field, index) => (
                    <article key={index} className='flex justify-between items-center bg-white/20 backdrop-blur-lg p-2 rounded-lg w-[450px]'>
                      <h1 className='font-bold text-sm text-slate-200'>{field.label}</h1>
                      <input 
                        type={field.type} 
                        className='border border-gray-300 rounded-md w-[220px] p-2 text-black text-sm'
                        name={field.id}
                        id={field.id}
                        defaultValue={field.value || ""}
                        readOnly
                      />
                    </article>
                  ))}

                  {/* Address Field */}
                  <article className='flex justify-between items-center bg-white/20 backdrop-blur-lg p-2 rounded-lg w-[450px]'>
                    <h1 className='font-bold text-sm text-slate-200'>Address</h1>
                    <textarea 
                      className='border border-gray-300 rounded-md w-[220px] p-2 text-black text-sm'
                      name='address'
                      id='address'
                      defaultValue={profile?.Address || ""}
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
