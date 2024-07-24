import React,{useEffect, useState} from 'react'

const Smallcards = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        async function GetCards(){
        const response = await fetch("http://localhost:8000/recommend/artist",{
            method:"GET",
            credentials:"include"
        });
         const json = await response.json()
         setCards(json)
     }
     GetCards()
    },[])
    return (
        <div className='your-artist '>
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5'>Recommended Artist For you</h1>
            <div className="all-card flex" >
                { cards.length >0 && cards.map((song)=>{
                     return <div className='artist-card w-56 mx-4 h-64'>
                     <img src={song.cover} className="artist-photo" alt="" height={'80%'} width={'80%'} style={{ borderRadius: '100px', marginLeft: '10%' }} />
                     <div className='artist-name mt-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{song.artist}</div>
                 </div>;
                })}
                

            </div>
        </div>
    )
}

export default Smallcards