// import logo from './logo.svg';
import './App.css';
import Register from './screen/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screen/Login/Login';
import Forgetpass from './screen/Login/Forgetpass';
import Otp from './screen/Login/Otp';
import Changepass from './screen/Login/Changepass';
import Otp1 from './screen/Register/Otp1';
import Home from './components/Home';
import { useState } from 'react';
import Allplaylist from './pages/Allplaylist';
import Allartist from './pages/Allartists';
import Allsongs from './pages/Allsongs';
import Playlist from './components/Playlist'
function App() {
  const[otpState,setOtpState]=useState()
  const[forgetotp,setforgetotp]=useState();
  const [current,setCurrent] = useState(null);
  return (
    <div >
   
      <Router>
        <Routes>
          <Route path='/' element={<Register setOtpState={setOtpState}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forget' element={<Forgetpass setforgetotp={setforgetotp}/>}/>
          <Route path='/otp' element={<Otp forgetotp={forgetotp}/>}/>
          <Route path='/change' element={<Changepass forgetotp={forgetotp}/>}/>
          <Route path='/otp1' element={<Otp1 otpState={otpState}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/playlist' element={<Allplaylist current={current} setCurrent={setCurrent}/>}/>
          <Route path='/artist' element={<Allartist/>}/>
          <Route path='/songs' element={<Allsongs current={current} setCurrent={setCurrent}/>}/>
          <Route path ='/player/:name' element={<Playlist/>} />
        </Routes>
      </Router>
     
      </div>
  );
}

export default App;
