import React,{useEffect,useState,useReducer, useContext} from "react";
import { useParams ,useLocation} from "react-router-dom";

import MusicCover from "./MusicCover";
import Control from "./Control";
import AudioHover from "./AudioHover";
import Playplaylist from "./Playplaylist";
import { PlayContextProvider } from "../context/PlayContext";
import { PlayerContext } from "../context/PlayerContext";
import SideComponent from "./SideComponent";
import Header from "./Header";
export default function Playlist({add,setAdd,info}){
 
       const {
        current,
        songs,setSongs
      } = useContext(PlayerContext)
        const {name}= useParams();
        console.log(name)
        const [data,setData] =useState(null)
         useEffect(()=>{
          
           if(name === "top"){
          
            const url = `http://localhost:8000/recommend/top`;
            fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
               response.json().then((data)=>{
                    setSongs(data)
                   setData({
                       cover:"img10.jpg",
                       name:"Top Songs",
                    })
               })
            }).catch((e)=>{
                console.log(e)
           })
           }else{
           
           const url = `http://localhost:8000/playlist/${name}`;
            fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
              response.json().then((val)=>{
                   setSongs(val[0].songs)
                    setData(val[0])
                    console.log(val)
              })
           }).catch((e)=>{
                console.log(e)
            })
           }
          if(info){
               setSongs(info.songs)
               setData(info);
          }
           
  },[])
  
return(
        <>
<div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />
<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
      <div className="mt-0 h-screen w-screen bg-black"> 
      <div className="grid grid-cols-1 sm:grid-cols-4 h-64 w-full">
          <div className="col-span-1 bold content-center mt-14"
          >
         {data ?  <img src={data.cover} className="object-contain h-36 sm:h-3/5 w-full md:w-3/5 pl-10" />  : null}
          </div>
        { data ?  <div className="col-span-1 sm:col-span-3 h-1/6 pt-8 pl-4 text-left text-orange-300  border-x-fuchsia-600">
           <h1 className="font-bold text-2xl mb-2 sm:mb-0 ml-2 sm:ml-3">{data.name}</h1>

          </div> : null}
      </div>
      <Playplaylist />
      {songs? songs.map((s,i)=>{
       
                return <MusicCover key={i} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i}  add={add} setAdd={setAdd}/>
      }) : null}
    <div className="text-left w-screen bg-black z-10 ">
      {  current ? <AudioHover /> : null }
      </div>
      </div>
     
</div>
  </div>
     
      </>
   )
}