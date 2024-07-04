import React, { useState } from 'react';
import { FaCompactDisc } from "react-icons/fa6";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import {Link, Outlet} from "react-router-dom"
import {Link as Link2} from "react-scroll"
const Navbar = () => {
    const [open,setOpen] =useState(false)
    // const [credentials, setcredentials] = useState("")
    // const handlesubmit = async (e) => {
    //     e.preventDefault();
    //     const url = 'http://localhost:8000/auth/login';
    //     const response = await fetch(url, {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username: credentials.username, password: credentials.password })
    //     });

    //     const json = await response.json();
    //     console.log(response.cookies);
    //     const{message}=json;
    //     if(message!==undefined){
    //     alert(message)}
    //     if(message ==="success") navigate('/home')
       
    // }
    // const handleonchange = (e) => {
    //     setcredentials({ ...credentials, [e.target.name]: e.target.value })
    //     console.log(credentials);
    // }
    function opensidebar(){
           setOpen((prev)=> !prev)
    }
    return (
        <>
        <div>
            <nav className="bg-black">
                <div className="fixed top-0 left-0 md:mx-1 max-w-7xl px-2 sm:px-6 lg:px-8 mb-0 md:mb-4">
                    <div className="relative flex h-16 items-center justify-between ">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <div><MdOutlinePlaylistPlay className='block sm:hidden text-orange-300 h-7 w-7 'onClick={opensidebar}/></div>
                                <div><FaCompactDisc className='discnav text-orange-300 h-7 w-7 mx-3' /></div>
                                <h1 className="h1title text-orange-300 py-2 from-inherit mx-2 text-2xl">Musicify</h1>
                            </div>
                            <div className="hidden lg:block sm:ml-6 ">
                                <div className="flex space-x-4">
                                <Link to="/home" className="rounded-md px-3 py-3 text-sm font-medium text-orange-300 hover:bg-orange-300 hover:text-black">Home</Link>
                                <Link to="/songs" className="rounded-md px-3 py-3 text-sm font-medium text-orange-300 hover:bg-orange-300 hover:text-black">Songs</Link>
                                <Link to="/artist" className="rounded-md px-3 py-3 text-sm font-medium text-orange-300 hover:bg-orange-300 hover:text-black">Artists</Link>
                                <Link to="/playlist" className="rounded-md px-3 py-3 text-sm font-medium text-orange-300 hover:bg-orange-300 hover:text-black">Playlist</Link>
                                <Link to="/upload" className="rounded-md px-3 py-3 text-sm font-medium text-orange-300 hover:bg-orange-300 hover:text-black">Upload Song</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                 <input 
                                    type="text" 
                                    className="searchbar block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm"
                                    placeholder="Search..."/> 
                            </div>
                            <div className="relative">
                                <Link to="/profile">
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button> 
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
              {open ? <div  id="sidebar" >
                    <div className="fixed top-8 left-0 space-y-1 px-2 pb-3 pt-2 bg-black">
                        <a href="#" className="block rounded-md px-3 py-2 text-center text-base font-medium text-orange-300 hover:bg-orange-300 hover:text-black" style={{width:'40%', marginLeft:'30%'}}>Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-center text-base font-medium text-orange-300 hover:bg-orange-300 hover:text-black" style={{width:'40%', marginLeft:'30%'}}>Saved</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-center text-base font-medium text-orange-300 hover:bg-orange-300 hover:text-black" style={{width:'40%', marginLeft:'30%'}}>Playlist</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-center text-base font-medium text-orange-300 hover:bg-orange-300 hover:text-black" style={{width:'40%', marginLeft:'30%'}}>Favourite</a>
                      
                    </div>
                </div> : null }
                
            </nav>
        </div>
        <Outlet />
        </>
    );
}

export default Navbar;
