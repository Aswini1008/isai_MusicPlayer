import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextApi";
import { __DB } from "../Backend/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export let fetchProfileContext=createContext(null);

const FetchUserContext = ({children}) => {
  let {AuthUser}=useContext(AuthContext);
  let {uid}=AuthUser||{};

  let [profile,setprofile]=useState("");
  let [role,setrole]=useState("");

  useEffect(()=>{
    if(!uid){
      return;
    }
    let userCollection=doc(__DB,"user_Details",uid); 
    console.log(userCollection)
    onSnapshot(userCollection,(userData)=>{
      if(userData.exists())
      {
        setprofile(userData?.data());
        console.log(userData)
        setrole(userData?.data()?.role);
      }
      else
      {
        setprofile(null);
        console.log("userdata not found")
      }
    })
  },[uid])
  return (
  <fetchProfileContext.Provider value={{role,profile}}>
 {children}
  </fetchProfileContext.Provider>
    
  )
}

export default FetchUserContext