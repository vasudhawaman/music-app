import React from "react";
import {Link} from "react-router-dom"
export default function SideComponent(){
    return(
    <div  className="sm:cols-span-2 hidden sm:block text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900">
        <div className="text-3xl font-bold mb-6 cursor-pointer">
          <Link to="/home">Musify</Link></div>
         <Link to="/songs" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
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
          Upload song
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
    )
}