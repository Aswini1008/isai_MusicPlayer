import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { __AUTH } from '../Backend/firebase';
import toast from 'react-hot-toast';

export let AuthContext=createContext(null);

const ContextApi = ({children}) => {
let [AuthUser,setAuthUser]=useState();
let [albumsongs,setalbumSongs]=useState([]);
let logout=async()=>{
  await signOut(__AUTH);
  toast.success('you have logged out from this  ${email} account')
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
let UploadOnCloudinary=async(e)=>{
  const data=new FormData();
  console.log(data)
  data.append("file",e.target.files[0]);
  data.append("upload_preset","isai_2025")
  data.append("cloud_name","dlimysous")
  const response=await fetch(
   " https://api.cloudinary.com/v1_1/dlimysous/image/upload",
    {
       method:"POST",
       body:data,
     }
  );
  const result=await response.json();
  return result.secure_url;
}
  
  return (
    <AuthContext.Provider value={{AuthUser,setAuthUser,logout,UploadOnCloudinary,albumsongs,setalbumSongs}}>
       {children} 
    </AuthContext.Provider>
  )
}

export default ContextApi