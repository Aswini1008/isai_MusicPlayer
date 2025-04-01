import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSideBar from "./ProfileSideBar";

const ProfileContainer = () => {
  return (
    <section className="flex">
      <ProfileSideBar />
      <main className="ml-[260px] w-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-blue-800 p-8">
        <Outlet />
      </main>
    </section>
  );
};

export default ProfileContainer;
