import React,{useState,useEffect} from 'react'
import { FaCirclePlay } from "react-icons/fa6";
const Recommdation = ({width}) => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        async function GetCards(){
        const response = await fetch("http://localhost:8000/recommend/all",{
            method:"GET",
            credentials:"include"
        });
         const json = await response.json()
         setCards(json)
     }
     GetCards()
     if(cards.length === 0){
        async function set(){
            const response = await fetch("http://localhost:8000/recommend/top",{
                method:"GET",
                credentials:"include"
            });
             const json = await response.json()
             let data =[];
             data.push(json[1]);
             data.push(json[0]);
             setCards(data);

         }
     }
    },[])
    const calculatedMarginLeft = width === '85%' ? '67%' : '70%';
    return (
        <div className=' mt-0 mb-0 your-playlist h-96' id="recommendation">
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5'>Songs Recommended For you</h1>
            <div className="all-card flex" >
                {
                    cards.length>0 && cards.map((song)=>{
                        return  <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                        <img src={song.cover} className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                        <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                        <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>{song.song}</div>
                        <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>{song.artist}</div>
                    </div>
                    })
                }  
            </div>
        </div>
    )
}

export default Recommdation