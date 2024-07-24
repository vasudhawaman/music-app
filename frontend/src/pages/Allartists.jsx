import react from "react"
import ArtistCard from "../components/Artistcard";
import SideComponent from "../components/SideComponent"
import Header from "../components/Header"
export default function Allartist(){

    return(
        <>
        <div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />

   <div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
      <div className='your-playlist h-96 mt-14'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5'>Artists</h1>
        <ArtistCard/>
        </div>
     </div>
     </div>
        
       
        </>
    )
}