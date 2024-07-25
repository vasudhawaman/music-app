import React from "react";
import {Link} from "react-router-dom"
export default function SideComponent(){
    return(
    <div  className="h-full cols-span-2 hidden sm:block text-orange-300 p-3 text-center bg-gradient-to-r from-black to-slate-900">
        <div className="fixed top-3 left-5 sm:left-0 lg:left-5 text-3xl sm:text-2xl font-bold mb-6">Musify</div>
        <div className="fixed top-14 left-5 sm:left-0 lg:left-5 text-sm">
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
          Upload
        </Link>
        <Link to="/profile"className="block py-2 px-4 mx-2 rounded-lg">
         Profile
        </Link>
        <Link to="/home" className="block py-2 px-4 rounded-lg hover:bg-lightPurple">
          Home
        </Link>
                          
        
        </div>
        
            </div>
    )
}