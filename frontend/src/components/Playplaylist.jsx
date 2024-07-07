import React ,{useContext} from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PlayContext } from "../context/PlayContext";
import { PlayerContext } from "../context/PlayerContext";
export default function Playplaylist(){
    const {setCurrent,songs,setSongs,setPlayStatus} = useContext(PlayerContext)
    const {start,setStart} = useContext(PlayContext)
    function playSongs(){
       
      setCurrent(
        {now:songs[0],
        length:songs.length,
        index:0
        }
      )
      setStart(true)
     
       setPlayStatus(true)
       
     }
    
    function shuffleSongs(){
      const shuffle = (array: string[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      };
      const newSongs = shuffle(songs);
      setSongs(newSongs)
      playSongs()
         
    }
    
     return(
        <div className="text-left pl-5 h-1/6 ">
        <PlayCircleIcon  className="text-base sm:text-2xl text-orange-300"onClick={
          playSongs}/>
        <RepeatIcon  className="text-base sm:text-2xl text-amber-300" onClick={shuffleSongs}/>
      </div>
     )
}