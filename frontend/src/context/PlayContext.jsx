import React ,{createContext,useState} from 'react';

export const PlayContext = createContext();

export const PlayContextProvider =(props)=>{
    const [start,setStart] = useState(false);

    return(
        <PlayContext.Provider value={{start,setStart}}>
            {props.children}
        </PlayContext.Provider>
    )
}