import React,{useState} from "react";
import  {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
export default function Create(){
    const backend =process.env.REACT_APP_BACKEND;
    const [credentials, setcredentials] = useState({name: "" })
    const navigate = useNavigate();
    function showDialog(){
        const dialog = document.getElementById("dialog")
        dialog.classList.remove("hidden")
     }
     function closeDialog(){
        const dialog = document.getElementById("dialog")
        dialog.classList.add("hidden")
     }
     const handlesubmit = async (e) => {
        e.preventDefault();
        credentials.name = credentials.name.replace(/\+s/g,"-")
        const url = `${backend}/playlist/create`;
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name})
        });

        const json = await response.json();

    }
    const handleonchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials);
    }
       return(
          
        <>
         <div className="all-card flex" >
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                   
                <button type="submit" class="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={showDialog}>Create</button>
                    
        <div id="dialog" className="hidden bg-white p-2">
              <form class="max-w-sm mx-auto" method="POST" onSubmit={handlesubmit}>
            <div class="mb-5">
            <CloseIcon className="text-black" onClick={()=>{
           const side = document.getElementById("dialog");
           side.classList.add("hidden");
             }}/>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Playlist Name</label>
            
            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" name="name" onChange={handleonchange}required />
         </div>
        
        
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={closeDialog}>Create</button>
         
         </form>
         </div>
         </div>
        </div>
         
        </>
        
      
       )
}