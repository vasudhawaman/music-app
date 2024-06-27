import React from "react";
import {Link} from "react-scroll"
import 'reactjs-popup/dist/index.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
export default function MusicCover({song,artist,cover,audio,index,current,setCurrent,add,setAdd}){
  const {name}= useParams();
  
      const newaudio = document.createElement("audio")
      const time = newaudio.duration;
      const obj ={
        artist:artist,
        song:song,
        cover:cover,
        audio:audio,
      }
      function setsong(){
       
       setCurrent({now:obj,play:false,index:index})
           const anchor = document.getElementById('controls')
          anchor?.scrollIntoView({ behavior: 'smooth' })
      }
     async function deleteSong(){
      const url = `http://localhost:8000/playlist/${name}`;
      const result = await fetch(url,{method:"POST",credentials:"include",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({song:obj})
      });
     
      }
       return(
        <>
        <Link
                 
                  to="controls"
                  spy={true}
                  smooth={true}
                 
                  duration={500}
                >
                 
         <div className="w-full h-12 border-indigo-50 bg-black text-orange-500  grid grid-cols-7 z-5 p-2" >
            <div className="col-span-1 rounded-full" onClick={setsong}> <img src={cover} className="object contain h-3/5 w-3/5 md:w-3/5 pl-1 md:pl-5" /></div>
            <div className="font-bold col-span-3 text-xs md:text-md mr-1 ml-1"  onClick={setsong}>{song}</div>
            <div className="col-span-1 text-xs md:text-md mr-1"  onClick={setsong}>{artist}</div>
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
            
         </div>
      
         </Link>
         
         </>
       )
}