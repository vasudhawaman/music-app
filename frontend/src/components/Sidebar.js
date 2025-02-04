import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
const Sidebar = () => {
  return (
   
  <div id="sidecomp" className="h-screen w-36 fixed top-0 left-0 hidden text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900 z-50">
   <div className="text-3xl font-bold mb-6 ">Musify</div>
   <CloseIcon className="text-white" onClick={()=>{
           const side = document.getElementById("sidecomp");
           side.classList.add("hidden");
   }}/>
         <Link to="/songs" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Songs
        </Link>
        <Link to="/playlists" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Playlists
        </Link>
        <Link to="/artists" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Artists
        </Link>
        <Link to="/radio" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Radio
        </Link>
        <Link to="/upload" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Upload song
        </Link>
        <Link to="/home" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Home
        </Link>
        <Link to="/profile"className="block py-2 px-4 mx-2 rounded-lg">
         Profile
        </Link>
       
    </div>
    
  )
}

export default Sidebar