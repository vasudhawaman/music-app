import logo from './logo.svg';
import { useState ,useEffect} from 'react';
import './App.css';
import Playlist from './components/Playlist';
import AudioHover from './components/AudioHover';
import axios from 'axios'
function App() {
  const [songs,setSongs] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/song").then((res)=>{
       
       
       setSongs(res.data)
   })
   
},[])
  return (
    <div className="bg-black">
      <Playlist songs={songs}/>
      <div className='bg-black'>
      
      </div>
      
    </div>
  );
}

export default App;
