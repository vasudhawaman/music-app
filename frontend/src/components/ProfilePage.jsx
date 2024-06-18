import React from 'react'
import Navbar from './Navbar'
import ArtistCard from './Artistcard'
const ProfilePage = () => {
    return (
        <>
            <Navbar/>
            <div className="container font-bold text-orange-300 opacity-60 font-mono ">
                <div className='text-xl text-center mt-10 mr-10  '>Your Profile</div>
                <img className=" ml-[600px] h-16 w-16 mt-3 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <h1 className='mr-10 mt-5 text-4xl'>Username</h1>
                <div className='flex gap-2 justify-center mt-2'>
                    <p>7 Playlists </p>
                    <p>• 69 Followers</p>
                    <p>• 420 Following</p>
                </div>
                
                <div className='text-2xl text-center mt-7 mr-10  '>Your Top Artists</div>
                <div className="artist-list flex gap-2 items-center">
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                </div>
            </div>


        </>


    )
}

export default ProfilePage