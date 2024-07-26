import React,{useEffect} from "react"
import SideComponent from "./SideComponent"
import Header from "./Header"
import Smallcards from "./Smallcards"
import Recommdation from "./Recommdation"
import Yourplaylist from "./Yourplaylist"
import Chatbot from "./Chatbot"
export default function NewHome(){
 
    return(
<div className=" w-screen grid grid-cols-7">
   <SideComponent />
<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5 bg-gradient-to-r from-black to-slate-950">
      <Header />
      <Recommdation />
      <Smallcards />
      <Yourplaylist />  
      <Chatbot />
</div>
-+-
  </div>
 
    )
}