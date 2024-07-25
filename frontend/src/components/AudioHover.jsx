import React,{useContext} from "react";
import Control from "./Control";
import { PlayerContext} from "../context/PlayerContext";
export default function AudioHover(){
   const {
      current
    } = useContext(PlayerContext)
       const now = current.now;
       
      return(
        <div className="fixed left-0 bottom-20 h-12 bg-black w-full p-2 flex z-10 " id="controls" name="controls">
         {now ? 
         <>
         <div className="bg-black h-12"><img src={now.cover} className="object contain h-full w-16 md:w-16 bg-black" /></div>
           <div className="text-orange-300 bg-black ml-0 mr-0">
            <h1 className="bg-black pl-3 ml-0 mr-0 h-12">
            {now.song}
            </h1>
            <h4  className="bg-black ml-0 mr-0 h-12">
            {now.artist}
            </h4>
           
           </div> 
         {current ?  <div className="w-full bg-black ml-0"><Control/></div> : null}
           </>
           : null }
         </div>  )
  
}