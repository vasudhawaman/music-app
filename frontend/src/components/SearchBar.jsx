import React,{useContext, useState} from "react";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar(){
      
       const {search,setSearch} = useContext(SearchContext);
       const [val,setVal] = useState('')
      function handleChange(e){
             setVal(e.target.value)
     }
      function handleSubmit(e){
       e.preventDefault();
      
             setSearch(val);
            
        }

    return(
        
<form className="max-w-md mx-auto" onSubmit={handleSubmit}>   
   
    <div className="flex  bg-white">
       
        <input type="search" id="default-search" className="block w-full p-1 ps-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." required onChange={handleChange} />
        <button className=""><SearchIcon/></button>
    </div>
</form>

    )
}