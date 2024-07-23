import React, { useState, useEffect ,useContext} from "react"
import AudioHover from "../components/AudioHover";
import MusicCover from "../components/MusicCover";
import Search from "../components/Search"
import { songsData } from '../assets/assets'
import Songitem from "../components/Songitem";
import { SearchContext } from "../context/SearchContext";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";
export default function Allsongs({ add,setAdd }) {
    const {
        songs,setSongs
      } = useContext(PlayerContext)
    const {search,setSearch} = useContext(SearchContext);
   
    useEffect(() => {
       
        if(search){
            console.log(search,"useEffectran")
            const url = 'http://localhost:8000/search/song';
            fetch(url, { method: "POST", credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({song:search}),
            }).then((response) => {
                response.json().then((data) => {
                    setSongs(data)
                })
            }).catch((e) => {
                console.log(e)
            })
        }else{
            const url = 'http://localhost:8000/search/all';
            fetch(url, { method: "GET", credentials: "include" }).then((response) => {
                response.json().then((data) => {
                    setSongs(data)
                })
            }).catch((e) => {
                console.log(e)
            })
        }

    }, [search])
    
  return(
      <>
    
      <div className='your-playlist h-96 mt-14'>
      <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Songs</h1>
       <Search songs={add}/>  {/* this is a dialog box for searching playlist to add songs to with id = dialog*/}
      {
         songs.length>0 &&  songs.map((s,i)=>{
            return <MusicCover key={i} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i}  add={add} setAdd={setAdd} />
           })
      }
     
     <div className="text-left w-screen bg-black z-10">
     { <AudioHover  /> }
      </div>
     </div>
      </>
  )
}
