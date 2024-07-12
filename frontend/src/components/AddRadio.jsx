import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/radio.css";
import { uploadSong } from "./cloudinary";
export default function AddRadio(){
   const [info,setInfo] = useState({time:"",name:"",date:"",audio:""})
   function handleChange(e){
    if(e.target.name === "file"){
        setInfo((prev)=>{
            return {...prev,audio: e.target.files[0]}
        })
    }else{
        setInfo((prev)=>{
            return {...prev,[e.target.name]: e.target.value}
        })
    }
   }
  async function submitRadio(e){
              e.preventDefault()
              const url = await uploadSong(info.audio);
            //   const response = await fetch(
   }
    return(
        <div className="grid grid-cols-3">
        <div className="col-span-1 mt-16 border w-96 p-3 border-orange-300 ">
            <h1 className="text-orange-300 mb-3 text-xl">Add a radio station !</h1> 
        <form class="mb-10">
        <label for="email" class="block mb-2 text-sm font-medium text-orange-300 dark:text-white">Station Name:</label>
        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" name="name" required />
            <label for="time" class="block mb-2 text-sm font-medium text-orange-300 col-span-1">Select time:</label>
            <div class="flex">
                <input type="time" id="time" class="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value={info.time} required/>
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </div>
            
        <label class="block mb-2 mt-1 text-sm font-medium text-orange-300 dark:text-white" for="file_input">Upload file</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="audio"/>
        
        </form>
        <div className="items-center ">
        <label class="block mb-2 mt-1 text-sm font-medium text-orange-300 dark:text-white" >Choose a date</label>
        <DatePicker  wrapperClassName="ml-14" selected={info.date} onChange={(date) => setInfo((prev)=> { return {...prev ,date:date} }) } />
        </div>
        
        </div>
        {/* <div id="radio" className="mt-16 ml-0 col-span-2"></div> */}
        </div>   
    )
}