import React, { useState, useEffect, useContext } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import PauseIcon from '@mui/icons-material/Pause';
import { PlayContext } from "../context/PlayContext";
import { PlayerContext } from "../context/PlayerContext";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
export default function Control(){
  const {start,setStart} = useContext(PlayContext);
  const [maxValue,setMax] = useState(0);
  const [value,setValue] =useState(0);
  const [speed,setSpeed]=useState(100);
  const [volume,setVolume]=useState(100);
  const {
    audioRef,
    current,
    nextSong,
    playStatus,setPlayStatus,
    play,pause,
    total,setTotal,handleSongSpeed,
    handleSongVolume
  } = useContext(PlayerContext)
  
async function addViews(){
    const url = `http://localhost:8000/view/increase`;
      const result = await fetch(url,{method:"POST",credentials:"include",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({song:current.now.song})
      });
      
      const response= await fetch(`https://recommendation-api-qks9.onrender.com/recommendContent?song=${current.now.song}`,{
        method:"POST"
      });
      const recommend = await response.json();
      console.log(recommend)
      recommend.forEach(async(element)=>{
        const u = `http://localhost:8000/recommend/create`;
        const result = await fetch(u,{method:"POST",credentials:"include",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({song:element[1],artist:element[2]})
        });
        
   })
     
    }

 useEffect(()=>{
        
      if(current){
      
        audioRef.current.ontimeupdate = () => {
          setValue(audioRef.current.currentTime);
          
       }
       
      }
      if(start){
        audioRef.current.play()
        setTimeout(()=>{
          setTotal((prev)=>{
            if(prev === 30){
              addViews()
              console.log("added")
            }
             return prev+1;
          })
        },1000)
        setMax(audioRef.current.duration);
        
        audioRef.current.ontimeupdate = () => {
          setValue(audioRef.current.currentTime); 
      }
      
    } },[playStatus,start]);

    function handleValue(e){
           setValue(e.target.value);
           audioRef.current.currentTime = e.target.value;
    }
    function handleSpeed(e){
      setSpeed(e.target.value);
      handleSongSpeed(e);
    }
    function handleVolume(e){
      setVolume(e.target.value);
      handleSongVolume(e);
    }
    function handlePlay(){
      //  setPlaying(false);
      setMax(audioRef.current.duration);
      setPlayStatus(true)
      play()
      audioRef.current.ontimeupdate = () => {
        setValue(audioRef.current.currentTime); 
    }
      
    }
  
    function handlePause(){
      //  setPlaying(false);
      setPlayStatus(false)
      setStart(false)
      pause()
    }
    function replay10(){
      setMax(audioRef.current.duration);
      const song = document.getElementById("audio");
       song.currentTime = song.currentTime -10;
       setValue((prev)=> prev-10)
    }
    function forward10(){
      setMax(audioRef.current.duration);
      const song = document.getElementById("audio");
       song.currentTime = song.currentTime +10;
       setValue((prev)=> prev+10)
    }
    function forwardTO(){
      console.log(current.index)
        nextSong(current.index+1)
        setPlayStatus(false)
    }
    function backwardTO(){
        nextSong(current.index -1)
        setPlayStatus(false)
    }
      return(
        <div className="h-1/3 pl-5 pr-5 text-orange-300 bg-black ml-0">
              <div>{`${Math.floor(value /60)}`+':'+`${Math.floor(value % 60)}`}</div>
             
         <div class="bg-black">
            <input type="range" min="0" max={maxValue}  id="myRange" className="w-full" value={value} style={{accentColor:"rgb(249 ,115, 22)"}} onChange={handleValue} />
         </div>
         <div className="flex justify-center items-center bg-black">
         <div className="flex mt-0  bg-black">
            <div className="bg-black"><Replay10Icon className="text-left text-md sm:text-3xl text-orange-300"  onClick={replay10}/></div>
            <div> <SkipPreviousIcon className="text-left text-md sm:text-3xl text-orange-300" onClick={backwardTO}/></div>
            {playStatus? 
             <PauseIcon className="text-center text-base text-orange-300" onClick={handlePause} /> : <PlayCircleIcon  className="text-center text-md sm:text-3xl text-orange-300"  onClick={handlePlay}/>
            }
            <div> <SkipNextIcon className="text-right text-xs sm:text-3xl text-orange-300"  onClick={forwardTO}/></div>
         
            <div><Forward10Icon  className="text-right text-md sm:text-3xl text-orange-300"  onClick={forward10} /></div>
        
        {current ? <audio id="audio" src={current.now.audio} ref={audioRef} hidden /> : null}
        </div>
          


         </div>
         <div><TimesOneMobiledataIcon className="text-orange-300" /><input id="default-range" type="range" value={speed} onChange={handleSpeed} class="w-1/6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min="0" max="200"/>
          </div>
        <div><VolumeUpIcon className="text-orange-300"/><input id="default-range" type="range" value={volume} onChange={handleVolume} class=" w-1/6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min="0" max="100"/>
        </div>
        </div>
      )
}