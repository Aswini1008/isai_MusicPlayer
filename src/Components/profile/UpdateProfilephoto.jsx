import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";

const UpdateProfilePhoto = () => {
  const [photoFile, setPhotoFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!photoFile) {
      toast.error("Please select a photo to upload.");
      return;
    }
    setLoading(true);
    
    try {
      const data = new FormData();
      data.append("file", photoFile);
      data.append("upload_preset", "your_upload_preset");
      data.append("cloud_name", "your_cloud_name");

      const response = await fetch(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, {
        method: "POST",
        body: data,
      });
      
      const result = await response.json();
      if (result.error) throw new Error(result.error.message);

      await updateProfile(auth.currentUser, { photoURL: result.secure_url });
      toast.success("Profile photo updated successfully!");
    } catch (error) {
      toast.error(error.message || "Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPhotoFile(null);
    setPreview(null);
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-blue-800 w-full h-screen flex items-center justify-center text-white">
      <motion.article 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-[450px] bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-500"
      >
        <h2 className="text-3xl font-extrabold text-center text-white pb-4 border-b border-blue-700">
          Update Profile Photo
        </h2>
        <form onSubmit={handleUpload} className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col items-center">
            {preview && <img src={preview} alt="Preview" className="w-24 h-24 rounded-full border-2 border-gray-400 shadow-lg" />}
            <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">
              Choose File
              <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
            </label>
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="h-[50px] w-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md transition-all duration-300 ease-in-out disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
            <button
              type="button"
              className="h-[50px] w-full text-lg font-semibold bg-red-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-red-700"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.article>
    </div>
  );
};

export default UpdateProfilePhoto;
