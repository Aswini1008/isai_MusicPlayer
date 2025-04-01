import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextApi";

const MyAccount = () => {
  let { AuthUser } = useContext(AuthContext);

  return (
    <section className=" flex items-center justify-center min-h-screen">
      <article className="w-[450px] bg-white/10 backdrop-blur-xl border border-blue-600 shadow-2xl rounded-3xl overflow-hidden">
        {/* Profile Header */}
        <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 h-20 flex justify-center relative">
          <div className="absolute -bottom-14">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="h-28 w-28 rounded-full border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </header>

        {/* Profile Details */}
        <div className="text-center mt-16 px-8 pb-8">
          <h2 className="text-2xl font-bold text-white">{AuthUser?.username || "Guest User"}</h2>
          <p className="text-gray-300">{AuthUser?.email || "No email provided"}</p>

          {/* Status */}
          <div className="mt-4">
            <span
              className={`px-5 py-1 text-sm font-semibold rounded-full shadow-md ${
                AuthUser?.emailVerified ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {AuthUser?.emailVerified ? "Verified" : "Not Verified"}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            <button className="w-full py-2 text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500 hover:scale-105">
              Update Profile
            </button>
            <button className="w-full py-2 text-lg font-semibold bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-red-500 hover:scale-105">
              Logout
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MyAccount;
