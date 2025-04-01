import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/firebase'; // Firebase authentication instance
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from 'react-spinners'; // Loading spinner

const Register = () => {
    const initialregisterdata = {
        username: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerdata, setRegisterData] = useState(initialregisterdata);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { username, email, createPassword, confirmPassword } = registerdata;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({ ...registerdata, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Email validation before API call
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Enter a valid email address!");
            setLoading(false);
            return;
        }

        if (createPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            const userdetails = await createUserWithEmailAndPassword(__AUTH, email, createPassword);
            await sendEmailVerification(userdetails.user);
            await updateProfile(userdetails.user, {
                displayName: username,
                photoURL: "",
            });

            toast.success(`Registered successfully! Please verify your email.`);
            navigate("/login");
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                toast.error("Email is already registered! Try logging in.");
            } else if (err.code === "auth/weak-password") {
                toast.error("Password should be at least 6 characters long.");
            } else {
                toast.error("Registration failed. Try again.");
            }
        } finally {
            setRegisterData(initialregisterdata);
            setLoading(false);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-800 text-white">
            <article className="w-[450px] bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-blue-500">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Register</h2>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    
                    {/* Username Input */}
                    <section>
                        <label htmlFor="username" className="text-lg font-semibold text-gray-300">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="h-12 w-full border border-gray-500 bg-gray-800 px-3 text-white rounded-lg focus:outline-none focus:border-blue-500 transition" 
                            value={username} 
                            onChange={handleChange} 
                            required 
                        />
                    </section>

                    {/* Email Input */}
                    <section>
                        <label htmlFor="email" className="text-lg font-semibold text-gray-300">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="h-12 w-full border border-gray-500 bg-gray-800 px-3 text-white rounded-lg focus:outline-none focus:border-blue-500 transition" 
                            value={email} 
                            onChange={handleChange} 
                            required 
                        />
                    </section>

                    {/* Create Password Input */}
                    <section className="relative">
                        <label htmlFor="createPassword" className="text-lg font-semibold text-gray-300">Create Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="createPassword" 
                            name="createPassword" 
                            className="h-12 w-full border border-gray-500 bg-gray-800 px-3 text-white rounded-lg pr-10 focus:outline-none focus:border-blue-500 transition" 
                            value={createPassword} 
                            onChange={handleChange} 
                            required 
                        />
                        <div 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </section>

                    {/* Confirm Password Input */}
                    <section className="relative">
                        <label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-300">Confirm Password</label>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            className="h-12 w-full border border-gray-500 bg-gray-800 px-3 text-white rounded-lg pr-10 focus:outline-none focus:border-blue-500 transition" 
                            value={confirmPassword} 
                            onChange={handleChange} 
                            required 
                        />
                        <div 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                        >
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </section>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="h-12 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg flex items-center justify-center transition hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? <ClipLoader color="#fff" size={20} /> : "REGISTER"}
                    </button>
                </form>
            </article>
        </section>
    );
};

export default Register;
