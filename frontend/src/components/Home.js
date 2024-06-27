import React, { useState,useContext } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import TopArtist from './TopArtist'
import Yourplaylist from './Yourplaylist'
import Smallcards from './Smallcards'
import Recommdation from './Recommdation'
import Footer from './Footer'
import Sidebar from './Sidebar'
import SongPlayer from './SongPlayer'
const Home = () => {
    
    const[width,setwidth]=useState('100%')
    const[sidebarWidth,setsidebarWidth]=useState('0%')
  return (
    <div className='flex'>
    <div className="sidebar" style={{width:sidebarWidth}}><Sidebar/></div>
    <div className='right-side' style={{width:width}}>
        <Navbar width={width} setwidth={setwidth} setsidebarWidth={setsidebarWidth}/>
        <Cards />
        <TopArtist/>
        <Yourplaylist/>
        <Smallcards/>
        <Recommdation width={width}/>
        
        <Footer/>
        <div className='bottom-0 sticky w-screen'>
          <SongPlayer/>
        </div>
    </div>
    </div>
  )
}

export default Home