import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import Sidebar from './Sidebar';
const Header = () => {
  return (
    <>
    <div className="p-4 col-span-5 bg-black text-slate-400 rounded-lg mb-4 shadow-inner">
       <div  className="block sm:hidden"><TocIcon onClick={()=>{
        const side = document.getElementById("sidecomp");
        side.classList.remove("hidden");
       }}/></div>
      <SearchBar />
      
    </div>
    <Sidebar />
   </>
  );
};

export default Header;
