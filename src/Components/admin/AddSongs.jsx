import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/ContextApi';
import toast from 'react-hot-toast';

const AddSongs = () => {
  let { UploadOnCloudinary,albumSongs,setalbumSongs}=useContext(AuthContext)
  let initialSongData={
    songtitle:"",
    songsingers:"",
    songmusicdirectors:"",
    songthumbnail:"",
    songurl:""
  };
  let [song,setSong]=useState(initialSongData);
  let {songtitle,songsingers,songmusicdirectors,songthumbnail,songurl}=song;
  let handleChange=async(e)=>{
    let {name,value,type}=e.target;
    if(type=="file")
    {
      setSong({...song,[name]:await UploadOnCloudinary(e)})
    }
    else{
      setSong({...song,[name]:value})
    }
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    setalbumSongs([...albumSongs,song]);
    toast.success("song added to album successfully")
  }

  return (
    <div className='p-1 text-black font-medium bg-slate-500 w-[95%] mt-[130px] ml-[35px]'>
      <h1 className='font-extrabold p-7 text-3xl overline'>ADD SONG</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex p-3 flex-wrap'>
          <div className='w-[33%] flex flex-col gap-3 p-2'>
            <h1 className='font-bold text-2xl'>Song Title</h1>
            <input
             type="text"
              name='songtitle'
               id='songtitle' 
               placeholder='Song Title'
                className='h-[30px] p-[3] border-2 border-slate-950'
                value={songtitle}
                onChange={handleChange}/>
          </div>
          <div className='w-[33%] flex flex-col gap-3 p-2'>
            <h1 className='font-bold text-2xl'>Singer Name</h1>
            <input
             type="text"
              name='songsingers'
               id='songsingers' 
               placeholder='Singer Name'
                className='h-[30px] p-[3] border-2 border-slate-950'
                value={songsingers}
                onChange={handleChange}/>
          </div>
          <div className='w-[33%] flex flex-col gap-3 p-2'>
            <h1 className='font-bold text-2xl'>Song Music Director</h1>
            <input
             type="text"
              name='songmusicdirectors'
               id='songmusicdirectors' 
               placeholder='Music Director Name'
                className='h-[30px] p-[3] border-2 border-slate-950'
                value={songmusicdirectors}
                onChange={handleChange}/>
          </div>

          <div className='w-[33%] flex flex-col gap-3 p-2'>
            <h1 className='font-bold text-2xl '>Upload Song Thumbnail</h1>
            <input
             type="file"
              name='songthumbnail'
               id='songthumbnail' 
               className='h-[30px] p-[3] border-2 ml-28 py-1.5 px-3 border-slate-950'
                value={songthumbnail}
                 onChange={handleChange}/>
          </div>
          <div className='w-[33%] flex flex-col gap-3 p-2'>
            <h1 className='font-bold text-2xl '>Upload Song File(mp3)</h1>
            <input
             type="file"
              name='songupload'
               id='songupload' 
               className='h-[30px] p-[3] border-2 ml-28 py-1.5 px-3 border-slate-950'
                value={songurl}
                 onChange={handleChange}/>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddSongs