import React,{useState} from "react";
import Share from "./Share";
import { uploadCover } from "./cloudinary";
export default function Playlistfeatures({add}){
    const [file,setFile] = useState(null);
    async function handleDelete(){
       console.log(add);
      const url = `http://localhost:8000/playlist/delete/${add.name}`;
      const response = await fetch(url, {
          method: "DELETE",
          credentials: "include",
          headers: {
              "Content-Type": "application/json",
          },
         
      }).then(async(response)=>{
           const json = await response.json();
           if(json.message === "success") alert(json.message)
      });
  const dialog =document.getElementById("extra")
       dialog.classList.add("hidden")
  }
  async function handlesubmit(e){
      e.preventDefault()
      const cover = await uploadCover(file)

      const url = `http://localhost:8000/playlist/cover`;
      const response = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({name:add.name,cover:cover})
      }).then(async(response)=>{
           const json = await response.json();
           if(json.message === "success") alert(json.message)
      });
      const dialog =document.getElementById("cover")
      dialog.classList.remove("hidden")
      
  }
  function handleonchange(e){
      setFile(e.target.files[0]);
  }
    
      return(
        <><div id="extra" className="hidden mx-3">
        <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1" onClick={()=>{
            const share = document.getElementById("share");
            share.classList.remove("hidden");
        }}>Share</div>
        {add? <Share shareUrl={add.shareUrl}/> :null}
        <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1" onClick={()=>{
           
            handleDelete()
            }}>Delete</div>
        <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1" onClick={()=>{
           
              document.getElementById("cover").classList.remove("hidden")
              document.getElementById("extra").classList.add("hidden")
             
        }}>Change Cover</div>
        <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1"  onClick={()=>{
             const dialog = document.getElementById("extra");
             dialog.classList.add("hidden")
        }}>Close</div>
        
    </div>
    <div id="cover" className="hidden h-36 w-full bg-white mx-3">
    <form class="max-w-sm mx-auto"  onSubmit={handlesubmit}>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add cover</label>
            <input type="file" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="cover" onChange={handleonchange}required />
          </div>
          {file ? <img
        src={URL.createObjectURL(file)}
        alt="Uploaded"
        className="w-full h-auto"
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      /> : null}

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add</button>
             <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1"  onClick={()=>{
             const dialog = document.getElementById("cover");
             dialog.classList.add("hidden")
        }}>Close</div>
           </form>
    </div>
    </>
      )
}