import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { __AUTH } from '../Backend/firebase';
import toast from 'react-hot-toast';

export let AuthContext=createContext(null);

const ContextApi = ({children}) => {
let [AuthUser,setAuthUser]=useState();
let logout=async()=>{
  await signOut(__AUTH);
  toast.success(`you have logged out from this  ${email} account`)
  window.localStorage.removeItem("TOKEN");
  setTimeout(()=>{
    window.localStorage.assign("/Login")  
 },3000)
}
useEffect(()=>{
  onAuthStateChanged(__AUTH,(userData)=>{
    console.log(userData)
    if(userData?.emailVerified){
      setAuthUser(userData)
      window.localStorage.setItem("TOKEN",userData?.accessToken)
    }
    else{
      setAuthUser(null)
    }
  })
},[__AUTH])
  
  return (
    <AuthContext.Provider value={{AuthUser,setAuthUser,logout}}>
       {children} 
    </AuthContext.Provider>
  )
}

export default ContextApi