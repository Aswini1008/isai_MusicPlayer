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
      <article className='h-[70vh] w-[50vw] bg-slate-100 rounded-2xl'>
        <header className='bg-slate-600 h-[97px] flex flex-col gap-9'>  
          <div className='relative w-full bg-slate-600'>  
            <img src="https://cdn.pixabay.com/photo/2024/01/24/11/33/ai-generated-8529420_1280.png" alt="" className='h-[100px] w-[100px] rounded-[50%] absolute left-[330px] top-[-35px]' />  
          </div>  
          <div className='flex flex-col justify-center items-center text-2xl text-blue-300 gap-0.5 font-bold'>  
            <h1 className='p-6'>{AuthUser?.displayName}</h1>  
            <h1>{AuthUser?.email}</h1>  
            <NavLink to={"/profile/AddProf"} state={profile}>  
              Edit  
              <CiEdit className='bg-slate-600 h-[50px] w-[50px] text-white'/>  
            </NavLink>  
          </div>  
        </header>

        <section className='flex flex-col items-center mt-[220px]'>
          {profile === null ? (
            <div>
              <h1 className='text-[30px] text-red-400 font-extrabold'>User not Found</h1>
              <h1 className='text-[30px] text-red-400 font-extrabold'><FaUserSlash /></h1>
            </div>
          ) : (
            <section>
              <article>
                <div>
                  <form className='text-slate-400 font-semibold flex flex-col gap-2.5 justify-evenly items-center border-2 border-black p-16 bg-slate-300'>

                 
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>Name</h1>
                        <input 
                          type="text"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='name'
                          id='name'
                          value={profile.firstname + " " + profile.lastname} />
                      </div>
                    </article>

                   
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>DOB</h1>
                        <input 
                          type="date"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='dob'
                          id='dob'
                          value={profile.dob} />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>City</h1>
                        <input 
                          type="text"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='city'
                          id='city'
                          placeholder='city'
                          value={profile.city}/>
                      </div>
                    </article>

                
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>State</h1>
                        <input 
                          type="text"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='state'
                          id='state'
                          placeholder='state'
                          value={profile.state}/>
                      </div>
                    </article>

                  
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>Address</h1>
                        <textarea className='border border-gray-300 rounded w-[200px] p-3'
                          name='Address'
                          id='Address'
                          placeholder='Address'
                          value={profile.Address}></textarea>
                      </div>
                    </article>

                  
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>Language</h1>
                        <input 
                          type="text"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='language'
                          id='language'
                          placeholder='language'
                          value={profile.language}/>
                      </div>
                    </article>

                
                    <article className='flex justify-evenly bg-slate-700 p-2 rounded w-[600px]'>
                      <div className='flex gap-28'>
                        <h1 className='font-extrabold text-2xl text-slate-200 pt-2.5'>Age</h1>
                        <input 
                          type="text"
                          className='border border-gray-300 rounded w-[200px] p-3'
                          name='age'
                          id='age'
                          placeholder='age'
                          value={profile.age}/>
                      </div>
                    </article>

                  </form>
                </div>
              </article>
            </section>
          )}
        </section>
      </article>
    </section>
  );
}

export default Myacc;