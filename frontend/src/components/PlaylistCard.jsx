import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function PlaylistCard({name,cover,id,add,setAdd}){
    const Navigate = useNavigate();
    const shareUrl = 'https://' + "localhost:3000"+ '/share' + `?id=`+`${id}` +`&type=playlist`;
    const obj={
       
        name:name,
        id:id,
        shareUrl:shareUrl,
        cover:cover
    }
    return(
      
             <>
         <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src={cover ? cover : "https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain"} className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} onClick={()=>{
                         console.log(obj)
                        Navigate(`/player/${obj.name}`)
                    }
                    }/>
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{name}</div>
                    <div><MoreVertIcon style={{color:"white"}} onClick={()=>{
                         setAdd(obj)
                      const dialog = document.getElementById("extra");
                       dialog.classList.remove("hidden")
                    }}/>
                    </div>
                
            </div>
               
             </>   
              
    )
}