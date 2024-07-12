import React, { useEffect } from "react";

export default function Radio({audio}){
   
       // so shhit does work 
       // now need to add a UI for uploading a radio time and for that an audio file feature/list of playlists
       
   
    return(
        <>
        <audio id="peer" src={audio}  hidden/>
        <button id="click" className="bg-white" onClick={()=>{
             const audio = document.getElementById("peer");
             const startDate = new Date(`Tue Jul 02 2024 21:17:48 GMT+0530 (India Standard Time)`);
             const date = new Date();
             const t = (date - startDate)/1000;
             audio.currentTime = t;
            audio.play();
             console.log(t);
            
        }}>heello</button>

        </>
    )
}