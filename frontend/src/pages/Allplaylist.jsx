import react,{useEffect,useState} from "react"
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
export default function Allplaylist({current,setCurrent}){
      const [playlists,setPlaylists] =useState([])
    useEffect(()=>{
        const url = 'http://localhost:8000/playlist/all';
         fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
           response.json().then((data)=>{
               setPlaylists(data)
           })
        }).catch((e)=>{
            console.log(e)
        })
       

    },[])
    return(
        <>
         
        <div className='your-playlist h-56 mt-14'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-2xl mt-5 '>Your Playlists</h1>
        <Create/>
        <div className="all-card flex mt-4" >

       
        {
           playlists.length>0 &&  playlists.map((page)=>{
               return  <PlaylistCard name={page.name} cover={page.cover}/>;
             })
        }
        </div>
       
        </div>
       
        </>
    )
}