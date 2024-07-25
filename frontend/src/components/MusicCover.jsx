import React,{useState,useEffect,useContext} from "react";
import {Link} from "react-scroll"
import 'reactjs-popup/dist/index.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { PlayerContext } from "../context/PlayerContext";
export default function MusicCover({song,artist,cover,audio,index,add,setAdd}){
  const {name}= useParams();
       const [like,setLike]= useState(false)
       const {
       setCurrent,
        setPlayStatus,
        setTotal
       
      } = useContext(PlayerContext)
      const newaudio = document.createElement("audio")
      const time = newaudio.duration;
      let songName = song.replace(/-/g,' ');
      const obj ={
        artist:artist,
        song:song,
        cover:cover,
        audio:audio,
      }
      useEffect(()=>{
        async function isLiked(){
          const url = `http://localhost:8000/like/check`;
          const result = await fetch(url,{method:"POST",credentials:"include",
            headers: {
              "Content-Type": "application/json",
          },
            body: JSON.stringify({song:song})
          });
          const json = await result.json();
          if(json.message === "true") setLike(true);
        }
        isLiked();
      },[name])
      function setsong(){
       console.log("set song called")
       setCurrent({now:obj,index:index})
        setPlayStatus(false)
        setTotal(0)
           
      }
    async  function likeSong(){
      setLike(true)
        const url = `http://localhost:8000/like/add`;
        const result = await fetch(url,{method:"POST",credentials:"include",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({song:song})
        });
        const json = await result.json();
        const response= await fetch(`https://recommendation-api-qks9.onrender.com/recommendContent?song=${song}`,{
          method:"POST"
        });
        const recommend = await response.json();
        console.log(recommend)
        recommend.forEach(async(element)=>{
          const u = `http://localhost:8000/recommend/create`;
          const result = await fetch(u,{method:"POST",credentials:"include",
            headers: {
              "Content-Type": "application/json",
          },
            body: JSON.stringify({song:element[1],artist:element[2]})
          });
          
     })
}
      async  function removeLike(){
        setLike(false)
        const url = `http://localhost:8000/like/${song}`;
        const result = await fetch(url,{method:"DELETE",credentials:"include",
          headers: {
            "Content-Type": "application/json",
        },
        });
        const json = await result.json();
        alert(json.message)
      }
     async function deleteSong(){
      const url = `http://localhost:8000/playlist/${name}`;
      const result = await fetch(url,{method:"POST",credentials:"include",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({song:add})
      });
     
      }
       return(
        <>
        <Link to="controls" spy={true} smooth={true} duration={500}>
                 
         <div className="w-4/5 h-12 border-indigo-50 bg-black text-orange-300  grid grid-cols-7 z-5 p-2 border-amber-400" >
            <div className="col-span-1 rounded-full" onClick={setsong}> <img src={cover} className="object contain h-3/5 w-3/5 md:w-3/5 pl-1 md:pl-5" /></div>
            <div className="font-bold col-span-2 text-xs md:text-md mr-0 sm:mr-1  ml-1"  onClick={setsong}>{songName}</div>
            <div className="col-span-1 text-xs md:text-md mr-0 sm:mr-1 ml-1"  onClick={setsong}>{artist}</div>
            <div className="col-span-1 text-xs md:text-md"> <PlaylistAddIcon onClick={()=>{
                document.getElementById("dialog").show()
                setAdd(obj)
            }}/></div>
           {
               name? <div className="col-span-1 text-xs md:text-md"> <DeleteIcon onClick={()=>{
               
                  setAdd(obj)
                  deleteSong()
              }}/></div> : null
           }  
             <div className="font-bold col-span-1 text-xs md:text-md mr-0 sm:mr-1  ml-1"  >
                { like? <FavoriteIcon onClick={()=>{
                     
                      removeLike();
             }
              }/> :<FavoriteBorderIcon onClick={()=>{
               
                likeSong();
       }
        }/> }
              </div>
         </div>
      
         </Link>
         
         </>
       )
}