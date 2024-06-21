import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { songsData } from '../assets/assets'
const SongPlayer = ()=>{
    return(
        <>
          <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="hidden lg:flex items-center gap-4">
                <img className='w-12' src={songsData[0].image} alt="" />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto  text-orange-300">
                <div className="flex gap-4">
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img  className ='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    <img className='w-4 cursor-pointer'src={assets.play_icon} alt="" />
                    <img  className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    
                </div>
                <div className="flex items-center gap-5">
                    <p>0:0</p>
                    <div  className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                           
                    </div>
                    <p>3:00</p>

                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 ">
                
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded">

                </div>
                
            </div>

        </div>
    

        </>
    )

}

export default SongPlayer 
