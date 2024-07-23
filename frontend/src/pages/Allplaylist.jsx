import react,{useEffect,useState,useContext} from "react"
import SongPlayer from "../components/SongPlayer";
import Yourplaylist from "../components/Yourplaylist";
import PlaylistCard from "../components/PlaylistCard";
import Create from '../components/Create'
import axios from 'axios'
import { albumsData } from '../assets/assets'
import AlbumItem from "../components/AlbumItem";
import InsidePlaylist from '../components/InsidePlaylist'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { SearchContext } from "../context/SearchContext";
  import { PlayerContext } from "../context/PlayerContext";
export default function Allplaylist(){
      const [playlists,setPlaylists] =useState([]);
      const {search} = useContext(SearchContext);
      const {
        audioRef,
        current,setCurrent,
        songs,setSongs,nextSong,
        playStatus,setPlayStatus,
        play,pause,
        
       
      } = useContext(PlayerContext)
    useEffect(()=>{

        if(search){
            const url = 'http://localhost:8000/search/playlist';
            fetch(url, { method: "POST", credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({name:search}),
            }).then((response) => {
                response.json().then((data) => {
                    setPlaylists(data)
                })
            }).catch((e) => {
                console.log(e)
            })
        }
       else{ const url = 'http://localhost:8000/playlist/all';
         fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
           response.json().then((data)=>{
               setPlaylists(data)
           })
        }).catch((e)=>{
            console.log(e)
        })
    }

    },[search])
    return(
        <>
         
        <div className='your-playlist h-56 mt-14'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-2xl mt-5 '>Your Playlists</h1>
        <Create/>
        <div className="all-card flex mt-4" >

       
        {
           playlists.length>0 &&  playlists.map((page)=>{
               return  <PlaylistCard name={page.name} cover={page.cover} id={page._id} key={page._id}/>;
             })
        }
        </div>
       
        </div>
       
        </>
    )
}