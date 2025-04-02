import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import ContextApi from '../Context/ContextApi'
import { useNavigate } from 'react-router-dom'

const UpdateProfilephoto = () => {
  
  let {AuthUser} =useContext(ContextApi)
  let [photofile,setPhotofile]=useState()
  let [preview,setPreview]=useState()
  let handleChange=(e)=>{
    console.log(e);
    let file=e.target.files[0]
    console.log(file);
    setPhotofile(file)
    setPreview(URL.createObjectURL(file))

  }
  console.log(photofile);
  console.log(preview);
  let handleSubmit=async (e)=>{
    e.preventDefault()
    try{
    if(!photofile)
    {
      toast.error("please select a file")
      return;
    }
   const data =new FormData()
   data.append("file",photofile)
   data.append("upload_present","isai_2025")
   data.append("cloud_name","dm5qm7mdz")
   const response = await fetch(
    
    "https://api.cloudinary.com/v1_1/dm5qm7mdz/image/upload",
    {
      method:"POST", 
      body:data
    }
   )
 
  }
    catch (error){

    }
  }
  
  return (
    <main className='flex flex-col justify-center items-center h-[80vh]'>
      <h1>UPDATE PROFILE PHOTO</h1>
      <section className='h-[40vh] w-[30vw] rounded-2xl bg-slate-800 flex items-center p-4'>
        <article className='flex flex-col'>
          {preview && (
            <div className='h-[50px] w-[430px] flex justify-center items-center'>
              <img src={preview} alt="" className='h-[80px] w-[80px] rounded-[50%]'/>
            </div>
          )}
          <form className='flex flex-col gap-10 w-[450px] p-10 justify-center ' onSubmit={handleSubmit}>
            <input type="file" className='rounded border border-gray-400 p-2 file:mr-5 file:bg-gray-200 file:p-1 file:rounded' onChange={handleChange}/>
            <div className='flex gap-10 text-slate-100'>
              <button className='px-15 py-2 bg-green-500 font-semibold rounded'>Upload</button>
              <h1 className='px-15 py-2 bg-green-500 font-semibold rounded'>Cancel</h1>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default UpdateProfilephoto
