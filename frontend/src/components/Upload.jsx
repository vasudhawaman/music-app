import React,{useState} from "react"
import {uploadSong,uploadCover} from "./cloudinary.js"
import { AssemblyAI } from 'assemblyai'
import SideComponent from "./SideComponent.jsx"
import Header from "./Header.jsx"
export default function Upload(){
  const [form,setForm] = useState({song:""})
 async function handleChange(e){
      setForm((prev)=>{
       if(e.target.name ==="song")  return {...prev,[e.target.name]:e.target.value}
       else  return {...prev,[e.target.name]:e.target.files[0]}
      })
  }
 async function handlesubmit(e){
     e.preventDefault()

     try{
      const fileUrl = await uploadCover(form.cover)
        const songUrl = await uploadSong(form.audio)
        const songName = form.song.replace(/\+s/g,"-")
        const client = new AssemblyAI({
          apiKey: process.env.REACT_APP_ASSEMBLY
        })
        const config = {
          audio_url: songUrl
        }
        
        const run = async () => {
          const transcript = await client.transcripts.transcribe(config)
          const url = 'http://localhost:8000/upload';
      const response = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ song:form.song,audio:songUrl,cover:fileUrl,text:transcript.text}) });
          const json = await response.json();
          alert(json.message)
    }
        run();
        
      
     }catch(err){
          console.log(err)
     }
     
     
  }
    return(
      <div className=" w-screen h-screen grid grid-cols-7">
      <SideComponent />
   
   <div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
         <Header />
         <form class="max-w-sm mx-auto bg-white p-6 border-3 mt-10" onSubmit={handlesubmit}>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song Name</label>
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" name="song" onChange={handleChange} value={form.song} required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Song file</label>
    <input type="file" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="audio" onChange={handleChange} required />
    { form.audio? <audio id="audio" controls src={URL.createObjectURL(form.audio)} /> : null}
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Song Cover file</label>
    <input type="file" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="cover" onChange={handleChange} />
    {form.cover ? <img
                    src={URL.createObjectURL(form.cover)}
                    alt="Uploaded"
                    className="w-full h-auto"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  /> : null}
  </div>
 
    
  <button type="submit" class="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
   </div>
     </div>



    )
}