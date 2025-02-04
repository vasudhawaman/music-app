import { createContext,useEffect,useRef,useState } from "react";
export const PlayerContext= createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const [current,setCurrent] = useState({});
    const [playStatus,setPlayStatus]= useState(false);
    const [songs,setSongs] = useState([])
    const [total,setTotal] = useState(0)
    
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
   

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
    const handleSongSpeed = (e) =>{
        const speed = e.target.value;
        setPlaybackSpeed(speed);
        if (audioRef.current) {
            audioRef.current.playbackRate = speed/100;
          }
        };
        const handleSongVolume = (e) =>{
            const speed = e.target.value;
            if (audioRef.current) {
                audioRef.current.volume = speed/100;
              }
            };
   
    const play = () => {
        audioRef.current.play();
        audioRef.current.onended =()=>{
            nextSong(current.index +1)
            setPlayStatus(false)
            setTotal(0)
        }
        setPlayStatus(true);
    }

    

   const contextValue = {
      audioRef,
      current,setCurrent,
      total,setTotal,
      songs,setSongs,nextSong,
      playStatus,setPlayStatus,
      play,pause,handleSongSpeed,
      playbackSpeed,setPlaybackSpeed,
      handleSongVolume
     
    }

    
   return (
    <PlayerContext.Provider value = {contextValue}>
        {props.children}
    </PlayerContext.Provider>
   )
}

export default PlayerContextProvider;