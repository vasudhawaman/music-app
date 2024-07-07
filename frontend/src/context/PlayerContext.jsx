import { createContext,useEffect,useRef,useState } from "react";
export const PlayerContext= createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const [current,setCurrent] = useState({});
    const [playStatus,setPlayStatus]= useState(false);
    const [songs,setSongs] = useState([])
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }
    const nextSong =(index) => {
        if(index <songs.length && index >=0){
             setCurrent({
                 
                 now: songs[index],
                 index:index,
             })
        
        }else{
         setCurrent({})
        }
    }
   
   

    

   const contextValue = {
      audioRef,
      current,setCurrent,
      songs,setSongs,nextSong,
      playStatus,setPlayStatus,
      play,pause,
     
    }

    
   return (
    <PlayerContext.Provider value = {contextValue}>
        {props.children}
    </PlayerContext.Provider>
   )
}

export default PlayerContextProvider;