import React,{useEffect, useState} from 'react'

const Smallcards = () => {
    const backend =process.env.REACT_APP_BACKEND;
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        async function GetCards(){
        const response = await fetch(`${backend}/recommend/artist`,{
            method:"GET",
            credentials:"include"
        });
         const json = await response.json()
         setCards(json)
     }
     GetCards()
     if(cards.length === 0){
        async function setit(){
            const response = await fetch(`${backend}/search/random`,{
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
    return (
        <div className='your-artist '>
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5'>Recommended Artist For you</h1>
            <div className="all-card flex" >
                { cards.length >0 && cards.map((song)=>{
                     return <div className='artist-card w-56 mx-4 h-64'>
                     <img src={song.cover} className="artist-photo" alt="" height={'80%'} width={'80%'} style={{ borderRadius: '100px', marginLeft: '10%' }} />
                     <div className='artist-name mt-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{song.name}</div>
                 </div>;
                })}
                

            </div>
        </div>
    )
}

export default Smallcards