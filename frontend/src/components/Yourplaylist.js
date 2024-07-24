import React from 'react'
import { useNavigate } from 'react-router-dom'
const Yourplaylist = () => {
    const Navigate= useNavigate();
       return (
        <div className='your-playlist h-96 z-30'>
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 underline'>Top Songs</h1>
            <div className="all-card flex" >
                
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}onClick={()=>
                   { Navigate('/player/top') }
                }>
                    <img src="img10.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>Top Songs</div>
                </div>
            </div>
        </div>
    )
}

export default Yourplaylist