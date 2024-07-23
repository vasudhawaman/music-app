import React ,{useContext,useState,useEffect} from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PlayContext } from "../context/PlayContext";
import { PlayerContext } from "../context/PlayerContext";
import MicIcon from '@mui/icons-material/Mic';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Playplaylist(){
    const {current,setCurrent,songs,setSongs,setPlayStatus,play,pause,audioRef,nextSong} = useContext(PlayerContext)
    const {start,setStart} = useContext(PlayContext)
    
    
   const startlistening =()=>{
    SpeechRecognition.startListening()
   }
   const stoplistening =()=>{
    SpeechRecognition.stopListening()
   }
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
    const commands =[{
      command:"start",
      callback:()=>{
         playSongs()
         resetTranscript()
      }
   },
   {
    command:"shuffle",
    callback:()=>{
        shuffleSongs()
      resetTranscript()
    }
 },
 {
  command:"pause",
  callback:()=>{
    setPlayStatus(false)
    pause()
    resetTranscript()
  }
},
{
  command:"previous",
  callback:()=>{
    nextSong(current.index -1)
    resetTranscript()
  }
},
{
  command:"next",
  callback:()=>{
    nextSong(current.index +1)
    setPlayStatus(false)
    resetTranscript()
  }
},
{
  command:"play",
  callback:()=>{
    setPlayStatus(true)
    play()
    resetTranscript()
  }
},
  ]
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});
   
    //  useEffect(()=>{
      
    //    if(transcript.toLowerCase() === "play"){
    //       playSongs()
    //       resetTranscript()
    //    }
    //    else if(transcript.toLowerCase() === "pause"){
    //     setPlayStatus(false)
    //      pause()
    //      resetTranscript()
    //  }
    //  },[listening])
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
     return(
      <>
        <div className="text-left pl-5 h-1/6 ">
        <PlayCircleIcon  className="text-base sm:text-2xl text-orange-300"onClick={
          playSongs}/>
        <RepeatIcon  className="text-base sm:text-2xl text-amber-300" onClick={shuffleSongs}/>
        <MicIcon  className="text-base sm:text-2xl text-amber-300" onClick={startlistening}
         />
        <ResetTvIcon  className="text-base sm:text-2xl text-amber-300" onClick={stoplistening}/>
        <p className="text-orange-300 text-base">Microphone: {listening ? 'on' : 'off'}</p>
        <p className="text-orange-300 text-base">{transcript}</p>
      </div>
      </>
     )
}