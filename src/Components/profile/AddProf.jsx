import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/ContextApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { __DB } from '../Backend/firebase';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const AddProfile = () => {
  const { AuthUser } = useContext(AuthContext);
  const { uid } = AuthUser || {};
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = {
    firstname: location?.state?.firstname || "",
    lastname: "",
    dob: "",
    state: "",
    city: "",
    Address: "",
    language: "",
    age: "",
    gender: "",
    role: "user"
  };

  const [updateProfile, setUpdateProfile] = useState(initialData);
  const { firstname, lastname, dob, state, city, Address, language, age, gender, role } = updateProfile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProfile({ ...updateProfile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { displayName, photoURL, email } = AuthUser;
      const payload = {
        firstname, lastname, dob, gender, city, state, Address, language, age,
        displayName, photoURL, email, uid, role
      };
      
      const userCollection = doc(__DB, "user_Details", uid);
      await setDoc(userCollection, { ...payload });
      toast.success("Your profile data is stored successfully");
      navigate("/profile");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main className=' pt-[500px] bg-gradient-to-br from-black via-gray-900 to-blue-800 w-full h-screen flex items-center justify-center text-white'>
      <motion.article 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-[450px] bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-500'
      >
        <h1 className='text-3xl font-extrabold text-center text-white pb-4 border-b border-blue-700'>ADD PROFILE</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          {[{ label: "First Name", name: "firstname" },
            { label: "Last Name", name: "lastname" },
            { label: "D.O.B", name: "dob", type: "date" },
            { label: "Age", name: "age", type: "number" },
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Language", name: "language" }].map(({ label, name, type = "text" }) => (
            <div key={name} className='flex flex-col'>
              <label className='font-semibold text-gray-300'>{label}</label>
              <input 
                type={type} 
                name={name} 
                value={updateProfile[name]} 
                onChange={handleChange} 
                className='h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                placeholder={label}
              />
            </div>
          ))}
          
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-300'>Gender</label>
            <div className='flex gap-5'>
              {["male", "female", "others"].map((g) => (
                <label key={g} className='flex items-center gap-2'>
                  <input 
                    type='radio' 
                    name='gender' 
                    value={g} 
                    onChange={handleChange} 
                    checked={gender === g} 
                    className='accent-blue-600'
                  />
                  {g.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
          
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-300'>Address</label>
            <textarea 
              name='Address' 
              value={Address} 
              onChange={handleChange} 
              className='border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none' 
              placeholder='Enter your address'
            />
          </div>
          
          <button 
            type='submit' 
            className='h-[50px] text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md transition-all duration-300 ease-in-out hover:opacity-90 disabled:opacity-50'
          >
            Update Profile
          </button>
        </form>
      </motion.article>
    </main>
  );
};

export default AddProfile;
