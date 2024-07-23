import React, { useState,useEffect} from "react";
import AddRadio from "./AddRadio";
import RadioStationCover from "./RadioCoverComponent";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function JoinRadio()  {
  const [all,setAll] =useState([]);
  useEffect(()=>{
    async function getAllStations(){
    const url = 'http://localhost:8000/radio/all';
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
   <div className="">
    <AddRadio/>
    {all.length > 0 && all.map((m)=>{
           return  <RadioStationCover audio={m.audio} name={m.radio_name} username={m.username} date={m.time}/>;
    })}
   
   </div>
    
  );
};