import React from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVert from "@mui/icons-material/MoreVert";
export default function PlaylistCard({name}){
    const Navigate = useNavigate();
    function goToplaylist(){
               Navigate(`/player/${name}`)
    }
    async function handleDelete(){
        const url = `http://localhost:8000/playlist/delete/${name}`;
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
           
        }).then(async(response)=>{
             const json = await response.json();
             if(json.message === "success") alert(json.message)
        });
    const dialog =document.getElementById("extra")
         dialog.close()
        window.location.reload()
    }
    return(
      
             <>
             
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} onClick={goToplaylist}/>
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{name}</div>
                    <div><MoreVertIcon style={{color:"white"}} onClick={()=>{

                      const dialog = document.getElementById("extra");
                      dialog.show()
                    }}/>
                    </div>
                    <dialog id="extra" >
                    <div>Share</div>
                    <div onClick={handleDelete}>Delete</div>
                    <div>Close</div>
                </dialog>
                </div>
               
             </>   
              
    )
}