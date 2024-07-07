import React from 'react'
import { Link } from 'react-router-dom'

const UserPlaylist = ({name,cover}) => {
  return (
    <div>
       
        <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src={cover ? cover : "https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain"} className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}}/>
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{name}</div>
        </div>
    </div>
  )
}

export default UserPlaylist