import React, { useState,useEffect} from "react";
import AddRadio from "./AddRadio";
import RadioStationCover from "./RadioCoverComponent";
import SideComponent from "./SideComponent";
import Header from "./Header";
export default function JoinRadio()  {
  const backend =process.env.REACT_APP_BACKEND;
  const [all,setAll] =useState([]);
  useEffect(()=>{
    async function getAllStations(){
    const url = `${backend}/radio/all`;
             const response = await fetch(url, {
                 method: "GET",
                 credentials: "include",
             });
             const json = await response.json()
             setAll(json);
    }
            getAllStations();
  },[])
  return (
 <div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />
    <div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
     <h1 className="text-orange-300 text-2xl mt-0">Join a station!</h1>
    {all.length > 0 && all.map((m)=>{
           return  <RadioStationCover audio={m.audio} name={m.radio_name} username={m.username} date={m.time}/>;
    })}
    <AddRadio/>
   </div>
</div>
   
    
  );
};