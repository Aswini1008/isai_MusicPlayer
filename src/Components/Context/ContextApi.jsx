import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { __AUTH } from "../Backend/firebase";
import toast from "react-hot-toast";

export let AuthContext = createContext(null);

const ContextApi = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(null);
  const [albumsongs, setAlbumSongs] = useState([]);

  // 🔹 Logout Function
  const logout = async () => {
    try {
      await signOut(__AUTH);
      toast.success(`Logged out from ${AuthUser?.email}`);
      window.localStorage.removeItem("TOKEN");
      setTimeout(() => {
        window.location.assign("/Login");
      }, 3000);
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  // 🔹 Handle Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(__AUTH, (user) => {
      if (user?.emailVerified) {
        setAuthUser(user);
        window.localStorage.setItem("TOKEN", user?.accessToken);
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Upload Image to Cloudinary
  const UploadOnCloudinary = async (file) => {
    try {
      if (!file) throw new Error("No file selected!");

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "isai_2025");  // Replace with your actual preset
      data.append("cloud_name", "dm5qm7mdz");      // Replace with your Cloudinary name

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dm5qm7mdz/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      if (result.error) throw new Error(result.error.message);

      return result.secure_url;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  // 🔹 Update Profile Photo in Firebase
  const updateProfilePhoto = async (file) => {
    if (!file) {
      toast.error("Please select a file first.");
      return;
    }

    try {
      const imageUrl = await UploadOnCloudinary(file);
      if (!imageUrl) throw new Error("Image upload failed.");

      await updateProfile(__AUTH.currentUser, { photoURL: imageUrl });
      setAuthUser({ ...__AUTH.currentUser, photoURL: imageUrl });

      toast.success("Profile photo updated!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ AuthUser, setAuthUser, logout, UploadOnCloudinary, updateProfilePhoto, albumsongs, setAlbumSongs }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextApi;
