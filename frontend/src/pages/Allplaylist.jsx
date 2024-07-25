import react,{useEffect,useState,useContext} from "react"
import PlaylistCard from "../components/PlaylistCard";
import Create from '../components/Create'
import Header from "../components/Header";
import SideComponent from "../components/SideComponent";
  import { SearchContext } from "../context/SearchContext";
  import { PlayerContext } from "../context/PlayerContext";
import Playlistfeatures from "../components/Playlistfeatures";
export default function Allplaylist({add,setAdd}){
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
         <div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />

<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
  
      <div className='your-playlist h-56 mt-14'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-2xl mt-5 '>Your Playlists</h1>
        <Create/>
        <div className="all-card flex mt-4" >

       
        {
           playlists.length>0 &&  playlists.map((page)=>{
               return  <PlaylistCard name={page.name} cover={page.cover} id={page._id}  add={add} setAdd={setAdd} key={page._id}/>;
             })
        }
        <Playlistfeatures add={add}/>
        </div>
       
        </div>
</div>
  </div>
        
       
        </>
    )
}