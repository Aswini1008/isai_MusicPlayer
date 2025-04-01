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
          
         

         
        
        </div>
      </article>
    </section>
  );
};

export default MyAccount;
