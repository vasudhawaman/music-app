import react from "react"
import Navbar from "../components/Navbar";
import ArtistCard from "../components/Artistcard";

export default function Allartist(){

    return(
        <>
        <Navbar/>
        <div className='your-playlist h-96'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Artists</h1>
        <ArtistCard/>
        </div>
       
        </>
    )
}