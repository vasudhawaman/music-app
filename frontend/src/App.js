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
import Home from './screen/Home';
import { useState } from 'react';

function App() {
  const[otpState,setOtpState]=useState()
  const[forgetotp,setforgetotp]=useState();
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
        </Routes>
      </Router>
      
      </div>
  );
}

export default App;
