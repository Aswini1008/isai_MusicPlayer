import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/firebase';
import { useNavigate, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from 'framer-motion';

const Login = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };

  const [Eye, setEye] = useState(false);
  const handleEye = () => setEye(!Eye);

  const [LoginData, setLoginData] = useState(initialLoginData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { email, password } = LoginData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userData = await signInWithEmailAndPassword(__AUTH, email, password);
      console.log(userData);
      if (userData.user.emailVerified) {
        toast.success(`${email} successfully logged in`);
        navigate("/");
      } else {
        toast.error(`${email} is not verified`);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoginData(initialLoginData);
      setLoading(false);
    }
  };

  return (
    <section className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-800 text-white'>
      <motion.article 
        className='w-[450px] bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-500'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <h2 className='text-3xl font-extrabold text-center pb-4 border-b border-blue-700'>LOGIN</h2>

          {/* Email Field */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-lg font-semibold'>Email</label>
            <input 
              type="email" 
              id='email' 
              name='email' 
              className='h-[45px] border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
              value={email} 
              onChange={handleChange} 
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor="password" className='text-lg font-semibold'>Password</label>
            <div className='relative'>
              <input 
                type={Eye ? "text" : "password"} 
                id='password' 
                name='password' 
                className='h-[45px] w-full border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                value={password} 
                onChange={handleChange} 
              />
              <div onClick={handleEye} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400'>
                {Eye ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className='h-[50px] bg-gradient-to-r from-blue-500 to-blue-600 text-lg font-semibold text-white rounded-md transition-all duration-300 ease-in-out hover:scale-105'
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          {/* Links for Register & Forgot Password */}
          <div className='text-sm flex justify-between'>
            <NavLink to={"/Register"} className='text-blue-400 hover:underline'>Don't have an account?</NavLink>
            <NavLink to={"/Forgetpassword"} className='text-red-400 hover:underline'>Forgot Password?</NavLink>
          </div>
        </form>
      </motion.article>
    </section>
  );
}

export default Login;
