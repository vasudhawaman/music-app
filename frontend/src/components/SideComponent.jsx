import React from "react";
import {Link} from "react-router-dom"
export default function SideComponent(){
    return(
<<<<<<< HEAD
    <div  className="sm:cols-span-2 hidden sm:block text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900">
        <div className="text-3xl font-bold mb-6 cursor-pointer">
          <Link to="/home">Musify</Link></div>
         <Link to="/songs" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
=======
    <div  className="h-full cols-span-2 hidden sm:block text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900">
        <div className="fixed top-3 left-5 sm:left-0 lg:left-5 text-3xl sm:text-2xl font-bold mb-6">Musify</div>
        <div className="fixed top-14 left-5 sm:left-0 lg:left-5 text-sm">
        <Link to="/songs" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
>>>>>>> e71815c682b184dcc1cd95f7f3609b54b8283a3e
          Songs
        </Link>
        <Link to="/playlist" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Playlists
        </Link>
        <Link to="/artist" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Artists
        </Link>
        <Link to="/join" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Radio
        </Link>
        <Link to="/upload" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Upload
        </Link>
        <Link to="/profile"className="block py-2 px-4 mx-2 rounded-lg">
         Profile
        </Link>
        <Link to="/home" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Home
        </Link>
        <Link to="/likes" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Liked Songs
        </Link>
        <Link to="/queue" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Queue 
        </Link>                          
        
        </div>
        
            </div>
    )
}