import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(__AUTH, email);
      toast.success(`Email link for reset is sent to ${email}`);
      navigate("/Login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className='w-full h-screen bg-gradient-to-br from-black via-gray-900 to-blue-800 flex items-center justify-center text-white'>
      <motion.article 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-[450px] bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-500'>
        
        <h1 className='text-3xl font-extrabold text-center text-white pb-4 border-b border-blue-700'>RESET PASSWORD</h1>
        
        <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
          <input 
            type='email' 
            name='email' 
            value={email} 
            placeholder='Email Address' 
            className='h-[45px] border border-gray-600 bg-gray-700 text-white px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none' 
            onChange={handleChange} 
            required
          />
          
          <button 
            className='h-[50px] text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md transition-all duration-300 ease-in-out disabled:opacity-50'>
            Send Reset Link
          </button>
        </form>
      </motion.article>
    </section>
  );
};

export default ForgetPassword;
