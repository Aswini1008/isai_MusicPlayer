import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/ContextApi';
import toast from 'react-hot-toast';

const AddSongs = () => {
  let { UploadOnCloudinary, albumSongs, setalbumSongs } = useContext(AuthContext)
  let initialSongData = {
    songtitle: "",
    songsingers: "",
    songmusicdirectors: "",
    songthumbnail: "",
    songurl: ""
  };
  let [song, setSong] = useState(initialSongData);
  let { songtitle, songsingers, songmusicdirectors, songthumbnail, songurl } = song;
  let handleChange = async (e) => {
    let { name, value, type } = e.target;
    if (type == "file") {
      setSong({ ...song, [name]: await UploadOnCloudinary(e) })
    }
    else {
      setSong({ ...song, [name]: value })
    }
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    setalbumSongs([...albumSongs, song]);
    toast.success("Song added to album successfully")
  }

  return (
    <div className='p-1 text-white font-medium bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-600 w-full min-h-screen flex justify-center items-center'>
      <div className="w-[600px] bg-gray-900 bg-opacity-80 shadow-xl rounded-3xl p-8 border border-blue-500">
        <h1 className='font-extrabold text-3xl text-center text-blue-400 pb-4 border-b border-blue-400'>Add Song</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex p-3 flex-wrap'>
            <div className='w-[50%] flex flex-col gap-3 p-2'>
              <h1 className='font-bold text-2xl text-blue-300'>Song Title</h1>
              <input
                type="text"
                name='songtitle'
                id='songtitle'
                placeholder='Song Title'
                className='h-[40px] p-3 border-2 border-blue-300 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={songtitle}
                onChange={handleChange} />
            </div>
            <div className='w-[50%] flex flex-col gap-3 p-2'>
              <h1 className='font-bold text-2xl text-blue-300'>Singer Name</h1>
              <input
                type="text"
                name='songsingers'
                id='songsingers'
                placeholder='Singer Name'
                className='h-[40px] p-3 border-2 border-blue-300 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={songsingers}
                onChange={handleChange} />
            </div>
            <div className='w-[50%] flex flex-col gap-3 p-2'>
              <h1 className='font-bold text-2xl text-blue-300'>Song Music Director</h1>
              <input
                type="text"
                name='songmusicdirectors'
                id='songmusicdirectors'
                placeholder='Music Director Name'
                className='h-[40px] p-3 border-2 border-blue-300 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={songmusicdirectors}
                onChange={handleChange} />
            </div>
            <div className='w-[50%] flex flex-col gap-3 p-2'>
              <h1 className='font-bold text-2xl text-blue-300'>Upload Song Thumbnail</h1>
              <input
                type="file"
                name='songthumbnail'
                id='songthumbnail'
                className='h-[40px] p-3 border-2 border-blue-300 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={handleChange} />
            </div>
            <div className='w-[50%] flex flex-col gap-3 p-2'>
              <h1 className='font-bold text-2xl text-blue-300'>Upload Song File(mp3)</h1>
              <input
                type="file"
                name='songupload'
                id='songupload'
                className='h-[40px] p-3 border-2 border-blue-300 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={handleChange} />
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button
              type="submit"
              className="h-[50px] w-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700"
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSongs;
