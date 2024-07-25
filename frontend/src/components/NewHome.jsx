import React from "react"
import SideComponent from "./SideComponent"
import Header from "./Header"
import Smallcards from "./Smallcards"
import Recommdation from "./Recommdation"
import Yourplaylist from "./Yourplaylist"
export default function NewHome(){
    return(
<div className=" w-screen h-screen grid grid-cols-7 bg-gradient-to-r from-darkPurple to-mediumPurple ">
   <SideComponent />
<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5 bg-gradient-to-r from-darkPurple to-mediumPurple">
      <Header />
      <Recommdation />
      <Smallcards />
      <Yourplaylist />  
</div>
  </div>
 
    )
}