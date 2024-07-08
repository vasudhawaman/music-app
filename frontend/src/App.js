
import { useState, useEffect } from 'react';
import './App.css';
import Register from './screen/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useNavigate
} from "react-router-dom";
import Login from './screen/Login/Login';
import Forgetpass from './screen/Login/Forgetpass';
import Otp from './screen/Login/Otp';
import Changepass from './screen/Login/Changepass';
import Otp1 from './screen/Register/Otp1';
import Home from './components/Home';
import Allplaylist from './pages/Allplaylist';
import Allartist from './pages/Allartists';
import Allsongs from './pages/Allsongs';
import Playlist from './components/Playlist'
import Upload from './components/Upload';
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import InsidePlaylist from './components/InsidePlaylist';
import Otherusers from './components/Otherusers';
import Ownprofile from './components/Ownprofile';
import Follower from './components/Follower';
import Followings from './components/Followings'
import Followingprofile from './components/Followingprofile';
import Tandc from './pages/T&C';
function App() {
 
  const [add,setAdd] = useState(null)
  const [otpState, setOtpState] = useState()
  const [forgetotp, setforgetotp] = useState();
  const [current, setCurrent] = useState(null);
  const [username, setusername] = useState('');
  
  const [user,setuser]=useState();
 
  useEffect(() => {
    async function getUser() {
      const response = await fetch("http://localhost:8000/auth/profile", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (json.username) setusername(json.username);


    }
    getUser();
  }, [])
  return (
    <div >

      <Router>
        <Routes>
          <Route path='/' element={<Register setOtpState={setOtpState} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forgetpass setforgetotp={setforgetotp} />} />
          <Route path='/otp' element={<Otp forgetotp={forgetotp} />} />
          <Route path='/change' element={<Changepass forgetotp={forgetotp} />} />
          <Route path='/otp1' element={<Otp1 otpState={otpState} />} />
          <Route path='tandc' element={<Tandc />} />
          <Route path='/home' element={<Home />} />
          <Route element={<Navbar />} >
            <Route path='/playlist' element={<Allplaylist current={current} setCurrent={setCurrent} />} />
            <Route path='/album/:id' element={<InsidePlaylist />} />
            <Route path='/artist' element={<Allartist />} />
            <Route path='/songs' element={<Allsongs current={current} setCurrent={setCurrent} add={add} setAdd={setAdd} />} />
            <Route path='/player/:name' element={<Playlist add={add} setAdd={setAdd} />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/profile' element={<Ownprofile username={username} />} />
            <Route path='/followings' element={<Followings username={username} setuser={setuser} />} />
            <Route path='/followers' element={<Follower username={username} />} />
            <Route path='/allusers' element={<Otherusers username={username} />} />
            <Route path='/followuser' element={<Followingprofile user={user}/>}/>
          </Route>


        </Routes>

      </Router>

    </div>
  );
}

export default App;
