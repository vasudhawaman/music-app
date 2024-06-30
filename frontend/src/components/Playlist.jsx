import React,{useEffect,useState,useReducer} from "react";
import { useParams } from "react-router-dom";
import image from './vasudha.jpg'
import MusicCover from "./MusicCover";
import Control from "./Control";
import AudioHover from "./AudioHover";
import Playplaylist from "./Playplaylist";

export default function Playlist({add,setAdd}){
        
        //   const shuffle = (array: string[]) => { 
        //     return array.sort(() => Math.random() - 0.5); 
        // }; 
       
        const {name}= useParams();
        console.log(name)
        useEffect(()=>{
            const url = `http://localhost:8000/playlist/${name}`;
             fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
               response.json().then((data)=>{
                    setSongs(data[0].songs)
                    setData(data[0])
               })
            }).catch((e)=>{
                console.log(e)
            })
           
    
        },[])
        const [songs,setSongs] =useState([])
        const [data,setData] =useState(null)
        const [current,setCurrent] =useState(null)
        const [play,setPlay] = useState(false)
         console.log(typeof(songs))
   function nextSong(index){
       if(index <songs.length && index >=0){
            setCurrent({
                
                now: songs[index],
                play:play,
                index:index,
                length:songs.length
            })
       
       }else{
        setCurrent(null)
       }
   }
      return(
        <>
     <div className="h-screen w-screen bg-black">
        
      <div className="grid grid-cols-1 sm:grid-cols-4 h-64 w-full">
          <div className="col-span-1 bold content-center mt-14"
          >
         {  data? <img src={ data.cover} className="object-contain h-36 sm:h-3/5 w-full md:w-3/5 pl-10" /> : <img src={ image} className="object-contain h-3/5 w-full md:w-3/5 pl-10" /> }
          </div>
          <div className="col-span-1 sm:col-span-3 h-1/6 pt-8 pl-4 text-left text-orange-300  border-x-fuchsia-600">
           <h1 className="font-bold text-lg mb-2 sm:mb-0 ml-2 sm:ml-3">{name}</h1>
           <h3 className="text-md">Created By: </h3>
           <h6 className="text-sm mb-1 sm:mb-0">Total songs: Time: </h6>
          </div>
      </div>
      <Playplaylist setCurrent={setCurrent} songs={songs}/>
      {songs.map((s,i)=>{
       
                return <MusicCover key={i} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i} current={current}  setCurrent={setCurrent} add={add} setAdd={setAdd}/>
      })}
    <div className="text-left w-screen bg-black z-10 ">
      {  current ? <AudioHover current={current} setCurrent={setCurrent}  nextSong={nextSong} setPlay={setPlay}/> : null }
      </div>
      </div>
     
      </>
   )
}