import React,{useState,useEffect,useContext} from "react"
import ArtistCard from "../components/Artistcard";
import SideComponent from "../components/SideComponent"
import { SearchContext } from "../context/SearchContext";
import Header from "../components/Header"
export default function Allartist(){
         const [cards,setCard] = useState([]);
        const {search,setSearch} = useContext(SearchContext);
       
        useEffect(() => {
           
            if(search){
                const url = 'http://localhost:8000/search/artist';
                fetch(url, { method: "POST", credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({artist:search}),
                }).then((response) => {
                    response.json().then((data) => {
                        setCard(data)
                    })
                }).catch((e) => {
                    console.log(e)
                })
            }else{
                async function getcards(){
                    const url = `http://localhost:8000/search/allartist`;
                    fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
                       response.json().then((data)=>{
                            setCard(data);
                       })
                    }).catch((e)=>{
                        console.log(e)
                   })
                 }
                 getcards()
            }
    
        }, [search])
         useEffect(()=>{
             
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