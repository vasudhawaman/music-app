import React,{useState} from "react"

export default function RadioCoverComponent({name,date,username,audio}){
    const diff = new Date(date);

    const [left,setLeft] = useState(new Date() -diff);
    const [join,setJoin] = useState(false)
    setInterval(()=>{
        const time = diff - new Date();
         if(time>0) setLeft(time/1000)
         else setJoin(true)
    },1000)
    function startRadio(){
       
        const audio = document.getElementById("peer");
        const startDate = new Date(date);
        console.log(startDate);
        const nowDate = new Date();
        const t = (nowDate - startDate)/1000;
       if(t<=audio.duration){

        audio.currentTime = t;
       audio.play();
       }else{
           setJoin(false)
       }
       
    }
    return(
        <div className="w-full h-12 bg-black border border-orange-300 grid grid-cols-4">
           <div className="text-orange-300 text-base col-span-1 bold">{name}</div>
           <div className="text-orange-300 text-base col-span-1 bold">{username}</div>
          { !join? <div className="text-orange-300 text-base col-span-1 bold">{`${Math.floor(left/3600)}hrs`+`${Math.floor((left%3600)/60)}mins`+`${Math.floor((left%60))}secs`}</div> : null}
             
             {join ?<>
           <audio id="peer" src={audio}  hidden/>
           <button type="submit" class="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={startRadio} >Join</button>
           
        </>
        : null}
        </div>
    )
}