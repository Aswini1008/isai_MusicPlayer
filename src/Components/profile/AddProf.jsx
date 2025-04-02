import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/ContextApi'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { __DB } from '../Backend/firebase';
import toast from 'react-hot-toast';

const AddProfile = () => {
  let {AuthUser}=useContext(AuthContext)
  console.log(AuthUser)
  let {uid}=AuthUser || {};
  let location=useLocation();
  let navigate=useNavigate();
  let initialData={
    firstname:location?.state?.firstname,
    lastname:"",
    dob:"",
    state:"",
    city:"",
    Address:"",
    language:"",
    age:"",
    role:"user"
  }
  let [updateProfile,setupdateProfile]=useState(initialData);
  let {firstname,lastname,dob,state,city,Address,language,age,gender,role}=updateProfile;
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setupdateProfile({...updateProfile,[name]:value})
  }
  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      let {displayName,photoURL,email,uid}=AuthUser;
      let payload={
        firstname,
        lastname,
        dob,
        gender,
        city,
        state,
        Address,
        language,
        age,
        displayName,
        photoURL,
        email,
        uid,
        role
      }
      let userCollection=doc(__DB,"user_Details",uid)
      await setDoc(userCollection,{...payload})
      toast.success("your profile data is stored successfully")
      navigate("/profile")
    }
   catch(err){
    toast.error(err.message);
   }
  }


  return (
   <main>
    <section className='flex flex-col gap-5 items-center mt-5'>
      <h1 className='text-4xl text-slate-800 font-bold flex justify-center'>
        {""}
        ADD PROFILE
        </h1>
        <article className='bg-slate-800 h-full w-[40vw] rounded-md'>
          <form className='p-5 ' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>First Name</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='firstname'
               id='firstname'
                placeholder='First Name'
                  onChange={handleChange}
                  value={firstname}
                />
             </div>
            
             <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>Last Name</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='lastname'
               id='lastname'
                placeholder='Last Name'
                onChange={handleChange}
                value={lastname}
            />
            </div>

            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>D.O.B</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="date"
              name='dob'
               id='dob'
                onChange={handleChange}
                value={dob}
            />
            </div><br/>
           <div className='text-slate-400 flex justify-evenly px-3 py-4 rounded bg-slate-500'>
               <div>
                <h1 className='font-semibold text-3xl text-slate-300 '>GENDER:</h1>
                <div className='flex gap-3'>
                  <input type="radio" name="gender" id="gender" value="male" onChange={handleChange} checked={gender == "male"}/>
                  <span className=' text-2xl font-medium text-slate-950'> MALE</span>
                   <input type="radio" name="gender" id="gender" value="female" onChange={handleChange} checked={gender == "female"}/>
                   <span className=' text-2xl font-medium  text-slate-950'> FEMALE</span>
                   <input type="radio" name="gender" id="gender" value="others" onChange={handleChange} checked={gender == "others"}/>
                   <span className=' text-2xl font-medium  text-slate-950'> OTHERS</span>
                </div>
                

               </div>
               </div>
               <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>AGE</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='age'
               id='age'
                placeholder='AGE'
                onChange={handleChange}
                value={age}
            />
            </div>
          
            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>CITY</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='city'
               id='city'
                placeholder='CITY'
                onChange={handleChange}
                value={city}
            />
            </div>

            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>STATE</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='state'
               id='state'
                placeholder='STATE'
                onChange={handleChange}
                value={state}
            />
            </div>
            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>ADDRESS</h1>
          <textarea
              type='text'
              name='Address'
               id='Address'
              className='h-max border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
              placeholder='ADDRESS'
                onChange={handleChange}
                value={Address}
           ></textarea>
            </div>
            <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-slate-200 pt-2'>LANGUAGE</h1>
            <input 
            className='h-[35px] border-2 border-slate-300 pl-3 font-semibold text-slate-300 text-2xl '
             type="text"
              name='language'
               id='language'
                placeholder='LANGUAGE'
                onChange={handleChange}
                value={language}
            />
            </div>

            <div className='flex justify-center items-center h-[80px]'>
              <button className='h-[45px] px-6 bg-black font-extrabold text-slate-300 rounded-2xl hover:bg-slate-400 '>UPDATE PROFILE</button>

            </div>
            
            
          </form>
        </article>

    </section>
   </main>
  )
}

export default AddProfile