import react,{useEffect,useState} from "react"

import Yourplaylist from "../components/Yourplaylist";
import PlaylistCard from "../components/PlaylistCard";
import Create from '../components/Create'
import axios from 'axios'
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
       
        <div className='your-playlist h-96'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Your Playlists</h1>
        <div className="all-card flex" >

       
        {
           playlists.length>0 &&  playlists.map((page)=>{
               return  <PlaylistCard name={page.name} cover={page.cover}/>;
             })
        }
        </div>
       
        </div>
        <Create/>
        </>
    )
}