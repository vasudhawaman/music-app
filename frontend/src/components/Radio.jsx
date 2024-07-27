import React, { useEffect } from "react";
export default function Radio({audio,date}){
    return(
        <>
        <audio id="peer" src={audio}  hidden/>
        
        <button id="click" className="bg-white" onClick={()=>{
             const audio = document.getElementById("peer");
             const startDate = new Date(date);
             const date = new Date();
             const t = (date - startDate)/1000;
             audio.currentTime = t;
            audio.play();
             console.log(t);
            
        }}>heello</button>

        </>
    )
}