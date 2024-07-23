import React , {useState,useContext} from "react"
import { AssemblyAI } from 'assemblyai'

import { PlayerContext } from "../context/PlayerContext";
export default function Lyrics(){
            const [lyric,setLyrics] = useState("");
            const [syncData,setData] = useState([])
            const {
                audioRef,
                playStatus
               
              } = useContext(PlayerContext)
              
          
          // npm install assemblyai


const client = new AssemblyAI({
  apiKey: "8eaea9586edd4058829c50e7d2eb5e85"
})

const audioUrl =
`https://res.cloudinary.com/dw1rh4myb/video/upload/v1718004735/Levitating---Dua-Lipa_trendymusic.in_uhro49.mp3`;
const config = {
  audio_url: audioUrl
}

const run = async () => {
  const transcript = await client.transcripts.transcribe(config)
  setData(transcript.words)
}

run()
           
            return(
                <div id="subtitles">{lyric}</div>
            )
     
}