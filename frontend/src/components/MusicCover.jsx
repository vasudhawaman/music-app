import React from "react";

export default function MusicCover({song,artist,cover,audio,index,current,setCurrent}){
       
      const newaudio = new Audio(audio)
     
      function setsong(){
        const obj ={
          artist:artist,
          song:song,
          cover:cover,
          audio:audio,
        }
       setCurrent({now:obj,play:false,index:index})
      }
       return(
         <div className="w-full h-12 border-indigo-50 bg-black text-orange-500  grid grid-cols-7 z-5" onClick={setsong}>
            <div className="col-span-1 rounded-full"> <img src={cover} className="object contain h-3/5 w-full md:w-3/5 pl-10" /></div>
            <div className="font-bold col-span-4">{song}</div>
            <div className="col-span-1">{artist}</div>
            
         </div>
       )
}