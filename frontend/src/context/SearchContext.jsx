import React ,{createContext,useState} from 'react';

export const SearchContext = createContext();

export const SearchContextProvider =(props)=>{
    const [search,setSearch] = useState(null);

    return(
        <SearchContext.Provider value={{search,setSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
}