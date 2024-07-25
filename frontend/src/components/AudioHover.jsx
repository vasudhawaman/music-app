import React,{useContext} from "react";
import Control from "./Control";
import { PlayerContext} from "../context/PlayerContext";
export default function AudioHover(){
   const {
      current
    } = useContext(PlayerContext)
       const now = current.now;
      return(
        <div className="bg-gradient-to-r from-darkPurple to-mediumPurple h-12 w-screen p-2 flex z-10 bg-black mx-auto " id="controls" name="controls">
         {now ? 
         <>
            <div className="bg-gradient-to-r from-darkPurple to-mediumPurple h-12"><img src={now.cover} className="object contain h-full w-16 md:w-16 bg-black" /></div>
           <div className="text-orange-300 bg-gradient-to-r from-darkPurple to-mediumPurple ml-0 mr-0">
            <h1 className="bg-black pl-3 ml-0  h-12">
            {now.song}
            </h1>
            <h4  className="bg-black ml-0  h-12">
            {now.artist}
            </h4>
           
           </div> 
           <div className="w-full bg-black ml-0"><Control/></div>
           </>
           : null }
         </div>  )
  
}