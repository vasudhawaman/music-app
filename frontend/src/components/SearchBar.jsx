import React,{useContext, useState} from "react";
import { SearchContext } from "../context/SearchContext";
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

    <input type="text" className="searchbar block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm" placeholder="Search..." onChange={handleChange}/>                            
</form>

    )
}