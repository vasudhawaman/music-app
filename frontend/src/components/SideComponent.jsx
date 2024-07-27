import React,{useEffect} from "react";
import {Link,useNavigate} from "react-router-dom"
export default function SideComponent(){
  const backend =process.env.REACT_APP_BACKEND
  const navigate = useNavigate();
    useEffect(()=>{
    async function Check(){
      const response = await fetch(`${backend}/auth/profile`,{
         method:"GET",
         credentials:"include"
      });
      if(response.status !== 200) navigate("/");
    }
    Check()
  },[])
    return(
    <div  className="h-screen cols-span-2 hidden sm:block text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900">
        <div className="fixed top-3 left-7 sm:left-0 lg:left-7 text-3xl sm:text-2xl font-bold mb-6">Musicify</div>
        <div className="fixed top-14 left-5 sm:left-0 lg:left-5 text-sm">
        <Link to="/songs" className="block py-2 px-4 rounded-lg ">
          Songs
        </Link>
        <Link to="/playlist" className="block py-2 px-4 rounded-lg ">
          Playlists
        </Link>
        <Link to="/artist" className="block py-2 px-4 rounded-lg ">
          Artists
        </Link>
        <Link to="/join" className="block py-2 px-4 rounded-lg ">
          Radio
        </Link>
        <Link to="/upload" className="block py-2 px-4 rounded-lg ">
          Upload
        </Link>
        <Link to="/profile"className="block py-2 px-4 mx-2 rounded-lg">
         Profile
        </Link>
        <Link to="/home" className="block py-2 px-4 rounded-lg">
          Home
        </Link>                      
        </div>
        </div>
    )
}