import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import Playlist from "./Playlist";
import MusicCover from "./MusicCover";
export default function SharedItem(){
   const [data,setData] = useState({});
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const paramValue = queryParams.get("type");
   const id = queryParams.get("id");
   useEffect(()=>{
         async function getData(){
            const url = `http://localhost:8000/recommend/share`;
            const result = await fetch(url,{method:"POST",credentials:"include",
              headers: {
                "Content-Type": "application/json",
            },
              body: JSON.stringify({value:paramValue,id:id})
            });
            const json = await result.json()
            setData(json[0])
         }
         getData()
   },[])
    return(
      <>       
      {paramValue === "song" ? <MusicCover artist={data.artist} cover={data.cover} song={data.song} audio={data.audio}/> : null}
      {paramValue === "playlist" ? <Playlist info={data}/> : null}
      </>
    )

}