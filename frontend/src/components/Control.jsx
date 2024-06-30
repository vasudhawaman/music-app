import React ,{useState,useEffect} from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import PauseIcon from '@mui/icons-material/Pause';

export default function Control({current,setCurrent,nextSong,setPlay}){
    const {now} = current;
    console.log(now)
    const [value,setValue] = useState(0);
      const [maxValue,setMax] =useState(0);
      const [isPlaying,setPlaying] = useState(true)
      const song = document?.getElementById("audio");
       song?.addEventListener("ended",()=>{
        document.getElementById("play").classList.remove("hidden")
        document.getElementById("pause").classList.remove("text-center")
        document.getElementById("pause").classList.add("hidden")
         nextSong(current.index +1);
       })
    function handleValue(e){
         
          const song = document.getElementById("audio");
           setPlaying((prev)=> {return !prev})
          song.currentTime = e.target.value;
          setValue(e.target.value)
          
    }
    function handlePlay(){
      const song = document?.getElementById("audio");
          document?.getElementById("play").classList.add("hidden")
          document?.getElementById("pause").classList.remove("hidden")
          document?.getElementById("pause").classList.add("text-center")
         
         setMax(song.duration);
        song?.play()
       song?.addEventListener("timeupdate",()=>{
        setValue(()=>{
        if(isPlaying) return song?.currentTime
        
        })
       }) 
    }
  //   if(current.play){
  //     nextSong(current.index +1)
  //  }
   if(current.play){
  
    
      const song = document?.getElementById("audio");
       song?.play()
    song?.addEventListener("ended",()=>{
      document.getElementById("play").classList.remove("hidden")
      document.getElementById("pause").classList.remove("text-center")
      document.getElementById("pause").classList.add("hidden")
       
        setPlay(true)
        nextSong(current.index+1)
    })
   }
    function handlePause(){
       
        document.getElementById("play").classList.remove("hidden")
        document.getElementById("pause").classList.remove("text-center")
        document.getElementById("pause").classList.add("hidden")
        const song = document?.getElementById("audio");
        song.pause()
    }
    function replay10(){
      const song = document.getElementById("audio");
       song.currentTime = song.currentTime -10;
       setValue((prev)=> prev-10)
    }
    function forward10(){
      const song = document.getElementById("audio");
       song.currentTime = song.currentTime +10;
       setValue((prev)=> prev+10)
    }
    function forwardTO(){
      console.log(current.index)
        nextSong(current.index+1)
    }
    function backwardTO(){
        nextSong(current.index -1)
    }
      return(
        <div className="h-1/3 pl-5 pr-5 text-orange-300 bg-black ml-0">
              <div>{`${Math.floor(value /60)}`+':'+`${Math.floor(value % 60)}`}</div>
         <div class="bg-black">
            <input type="range" min="0" max={maxValue}  id="myRange" className="w-full " value={value} style={{accentColor:"rgb(249 ,115, 22)"}} onChange={handleValue} />
         </div>
         <div className="flex justify-center items-center bg-black">
         <div className="flex mt-0  bg-black">
            <div className="bg-black"><Replay10Icon className="text-left text-md sm:text-3xl text-orange-300"  onClick={replay10}/></div>
            <div> <SkipPreviousIcon className="text-left text-md sm:text-3xl text-orange-300" onClick={backwardTO}/></div>
            <div id="play"> <PlayCircleIcon  className="text-center text-md sm:text-3xl text-orange-300"  onClick={handlePlay}/></div>
            <div id="pause" className="hidden text-md sm:text-3xl text-o"> <PauseIcon  className="hidden"  onClick={handlePause} /></div>
            <div> <SkipNextIcon className="text-right text-xs sm:text-3xl text-orange-300"  onClick={forwardTO}/></div>
         
            <div><Forward10Icon  className="text-right text-md sm:text-3xl text-orange-300"  onClick={forward10} /></div>
        
         <audio id="audio" src={now.audio} hidden></audio>
        </div>
       
         </div>
        
         
        </div>
      )
}