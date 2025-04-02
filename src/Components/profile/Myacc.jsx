import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { fetchProfileContext } from '../Context/FetchUserContext';
import { NavLink } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { FaUserSlash } from "react-icons/fa";

const Myacc = () => {
  let { AuthUser } = useContext(AuthContext);
  let { profile } = useContext(fetchProfileContext);

  return (
    <section className='flex justify-center items-center mt-20'>
      <article className='h-[80vh] w-[60vw] bg-gradient-to-br from-black via-gray-900 to-blue-800 rounded-3xl shadow-2xl relative'>

        {/* Header */}
        <header className='bg-slate-800 h-[120px] flex flex-col gap-6 justify-center items-center relative'>

          {/* Profile Image */}
          <div className='absolute top-[-60px] left-1/2 transform -translate-x-1/2 flex justify-center w-full'>
            <img 
              src="https://cdn.pixabay.com/photo/2024/01/24/11/33/ai-generated-8529420_1280.png" 
              alt="Profile" 
              className='h-[120px] w-[120px] rounded-full border-4 border-white shadow-lg object-cover'
            />
          </div>

          {/* User Details */}
          <div className='flex flex-col justify-center items-center text-2xl text-blue-300 gap-1 font-bold mt-16'>
            <h1 className='p-4'>{AuthUser?.displayName || "Guest User"}</h1>
            <h1>{AuthUser?.email || "No Email Provided"}</h1>
            <NavLink 
              to={"/profile/AddProf"} 
              state={profile} 
              className='flex items-center gap-2 text-lg text-blue-400 hover:text-blue-600'>
              Edit <CiEdit className='h-[25px] w-[25px] text-white' />
            </NavLink>
          </div>

        </header>

        {/* Profile Information */}
        <section className='flex flex-col items-center mt-[150px]'>

          {profile ? (
            <section>
              <article>
                <form className='text-slate-400 font-semibold flex flex-col gap-5 justify-center items-center border-2 border-black rounded-xl p-10 bg-slate-800'>

                  {/* Profile Fields */}
                  {[
                    { label: "Name", id: "name", type: "text", value: profile?.firstname + " " + profile?.lastname },
                    { label: "DOB", id: "dob", type: "date", value: profile?.dob },
                    { label: "City", id: "city", type: "text", value: profile?.city },
                    { label: "State", id: "state", type: "text", value: profile?.state },
                    { label: "Language", id: "language", type: "text", value: profile?.language },
                    { label: "Age", id: "age", type: "text", value: profile?.age }
                  ].map((field, index) => (
                    <article key={index} className='flex justify-between items-center bg-slate-700 p-3 rounded-xl w-[500px]'>
                      <h1 className='font-extrabold text-2xl text-slate-200'>{field.label}</h1>
                      <input 
                        type={field.type} 
                        className='border border-gray-300 rounded-lg w-[250px] p-3 text-black'
                        name={field.id}
                        id={field.id}
                        defaultValue={field.value || ""}
                        readOnly
                      />
                    </article>
                  ))}

                  {/* Address Field */}
                  <article className='flex justify-between items-center bg-slate-700 p-3 rounded-xl w-[500px]'>
                    <h1 className='font-extrabold text-2xl text-slate-200'>Address</h1>
                    <textarea 
                      className='border border-gray-300 rounded-lg w-[250px] p-3 text-black'
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
              <h1 className='text-[35px] text-red-400 font-extrabold'>User not Found</h1>
              <FaUserSlash className='text-red-400 text-5xl' />
            </div>
          )}

        </section>
      </article>
    </section>
  );
}

export default Myacc;
