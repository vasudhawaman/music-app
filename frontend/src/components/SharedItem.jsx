import React from "react";
import { useLocation } from "react-router-dom";
export default function SharedItem(){
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
 
   // access query parameters
   const paramValue = queryParams.get("type");
   
    return(
       <div>Shred</div>
    )

}