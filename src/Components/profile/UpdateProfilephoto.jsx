import React, { useState } from 'react'

const UpdateProfilephoto = () => {
    let[photoFile,setphotoFile]=useState()
    let[preview,setPreview]=useState()
    let handleChange=(e)=>{
        console.log(e);
        let flie = e.target.files[0]
        console.log(file);

    }
  return (
    <main className='flex flex-col justify-center items-center h-[80vh]'>
        <h1 className='p-3 font-bold text-2xl'>UPDATE PROFILE PHOTO</h1>
      <section className='h-[40vh] w-[30vw] rounded-2xl bg-slate-800 file:items-center'>
        <article className='flex'>
          <form className='flex flex-col gap-5 w-[450px] p-10 justify-center'>
            <input type="file" className='border border-gray-500 p-2 file:mr-5 file:bg-gray-200 file:p-1 file:rounded ' />:
            <div className='flex gap-10'>
            <button className='px-15 py-2 bg-green-400 font-semibold rounded'>Upload</button>
            <h1 className='px-15 py-2 bg-red-500 font-semibold rounded'>Cancle</h1>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default UpdateProfilephoto