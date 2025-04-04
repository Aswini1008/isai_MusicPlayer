import { updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../Context/ContextApi'
import { useNavigate } from 'react-router-dom'

const UpdateProfilephoto = () => {
  let navigate = useNavigate()
  let { AuthUser } = useContext(AuthContext)
  let [photofile, setPhotofile] = useState()
  let [preview, setPreview] = useState()

  let handleChange = (e) => {
    console.log(e)
    let file = e.target.files[0]
    console.log(file)
    setPhotofile(file)
    setPreview(URL.createObjectURL(file))
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!photofile) {
        toast.error("Please select a file")
        return;
      }
      const data = new FormData()
      data.append("file", photofile)
      data.append("upload_preset", "isai_2025")
      data.append("cloud_name", "dlimysous")

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlimysous/image/upload",
        {
          method: "POST",
          body: data
        }
      )

      const result = await response.json()
      console.log(result)
      const imageURL = result.url
      await updateProfile(AuthUser, {
        photoURL: imageURL
      })
      toast.success("Profile photo has been successfully updated")
      navigate("/profile")
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <main className='flex flex-col justify-center items-center h-screen bg-gray-900'>
      <h1 className='text-3xl font-semibold text-blue-500 mb-8'>Update Profile Photo</h1>
      <section className='h-[50vh] w-[40vw] bg-gray-800 rounded-3xl flex justify-center items-center shadow-lg'>
        <article className='flex flex-col justify-center items-center w-full'>
          {preview && (
            <div className='h-[100px] w-[100px] flex justify-center items-center mb-4'>
              <img src={preview} alt="Profile Preview" className='h-[100px] w-[100px] rounded-full border-4 border-blue-400 object-cover shadow-md' />
            </div>
          )}
          <form className='flex flex-col gap-6 w-[80%] p-8' onSubmit={handleSubmit}>
            <input 
              type="file" 
              className='rounded-xl border border-gray-400 p-2 mb-4 file:bg-gray-200 file:rounded-xl file:p-3 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-300 transition duration-300'
              onChange={handleChange}
            />
            <div className='flex justify-between gap-6'>
              <button type="submit" className='px-6 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition duration-300'>Upload</button>
              <button type="button" className='px-6 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300' onClick={() => navigate('/profile')}>Cancel</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default UpdateProfilephoto
git