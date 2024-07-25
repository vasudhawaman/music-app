import React, { useState, useEffect ,useContext} from "react"
import AudioHover from "../components/AudioHover";
import MusicCover from "../components/MusicCover";
import Search from "../components/Search";
import SideComponent from "../components/SideComponent"
import Header from "../components/Header"
import { SearchContext } from "../context/SearchContext";
import { PlayerContext } from "../context/PlayerContext";
import Share from "../components/Share"
export default function Allsongs({ add,setAdd }) {
    const {
        current,songs,setSongs
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
       <div className=" w-screen h-screen grid grid-cols-7 bg-gradient-to-r from-darkPurple to-mediumPurple">
   <SideComponent />

<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5 bg-gradient-to-r from-darkPurple to-mediumPurple">
      <Header />
      <div className='your-playlist h-96 mt-14 bg-gradient-to-r from-darkPurple to-mediumPurple'>
      <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Songs</h1>
       <Search songs={add}/>  {/* this is a dialog box for searching playlist to add songs to with id = dialog*/}
      {add? <Share shareUrl={add.shareUrl} /> : null}
      {
         songs.length>0 &&  songs.map((s,i)=>{
            return <MusicCover key={s._id} id={s._id} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i}  add={add} setAdd={setAdd} />
           })
      }
     
     <div className="text-left w-screen bg-black z-10">
     {current.now? <AudioHover  /> : null}
      </div>
     </div>
</div>
  </div>
     
      </>
  )
}
