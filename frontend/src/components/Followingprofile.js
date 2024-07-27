import React, { useEffect, useState } from 'react'
import UserPlaylist from './UserPlaylist';
import { Link } from 'react-router-dom';
const Followingprofile = (user) => {
    const backend =process.env.REACT_APP_BACKEND;
    const [userdata, setuser] = useState('');
    const [playlists, setplaylist] = useState('');
    console.log(user);
    useEffect(() => {
        const url = `${backend}/auth/profile`;
        async function alluser() {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username: user })
                });
                const data = await response.json();
                console.log(data.playlist);
                setuser(data.user)
                setplaylist(data.playlist);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        alluser();
    }, [user])

    return (
        <div className='mt-14 '>
            <div className='ml-12 mt-20 flex flex-row max-sm:flex-col'>
                <div className='flex max-sm:w-full max-sm:justify-center'>
                    <img className="w-72 h-60 " src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="Profile Image" />
                </div>
                <div className='flex flex-col max-sm:flex max-sm:justify-center'>
                    <div className='text-orange-300 ml-20 mt-10 text-3xl max-sm:text-center max-sm:ml-0'>Username:{userdata ? userdata.username : " "}</div>
                    <div className='text-orange-300 ml-20 mt-10 text-3xl max-sm:text-center max-sm:ml-0'>Email: {userdata ? userdata.email : " "}</div>
                </div>
            </div>
            <div className='text-orange-300 text-center mt-10 text-5xl underline'>Playlist</div>
            <div className="all-card flex mt-4" >
                {
                    playlists.length > 0 && playlists.map((page) => {
                        return <Link to={`/player/${page.name}`}>
                            <UserPlaylist name={page.name} cover={page.cover} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Followingprofile