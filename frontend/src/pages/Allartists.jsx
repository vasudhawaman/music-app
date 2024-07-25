import React,{useState,useEffect} from "react"
import ArtistCard from "../components/Artistcard";
import SideComponent from "../components/SideComponent"
import Header from "../components/Header"
export default function Allartist(){
         const [cards,setCard] = useState([]);
         useEffect(()=>{
             async function getcards(){
                const url = `http://localhost:8000/search/artist`;
                fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
                   response.json().then((data)=>{
                        setCard(data);
                   })
                }).catch((e)=>{
                    console.log(e)
               })
             }
             getcards()
         },[])
    return(
        <>
    <div className=" w-screen h-screen grid grid-cols-7">
          <SideComponent />
      <div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
      <div className='your-playlist h-96 mt-14'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5'>Artists</h1>
        <div className="all-card flex" >
        {cards.length >0 && cards.map((c)=>{
             return <ArtistCard cover={c.cover} name={c.name}/>;
        })}
       </div>
        </div>
     </div>
     </div>
    </>
    )
}