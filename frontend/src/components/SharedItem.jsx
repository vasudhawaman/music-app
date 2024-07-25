import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import Playlist from "./Playlist";
import MusicCover from "./MusicCover";
import Search from "./Search";
import SideComponent from "./SideComponent";
import Header from "./Header"
export default function SharedItem({add,setAdd}){
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
       <Search songs={add}/>
    {paramValue === "song" && data  ?
       <div className=" w-screen grid grid-cols-7">
       <SideComponent />
    <div className="w-full h-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
     <Header />
     <MusicCover key={data._id} id={data._id} song={data.song} artist={data.artist} audio={data.audio} cover={data.cover} index={data._id}  add={add} setAdd={setAdd} /> 
     </div></div>
      : null}

      {paramValue === "playlist" && data.name ? <Playlist info={data} /> : null}
        
     
      </>
    )

}