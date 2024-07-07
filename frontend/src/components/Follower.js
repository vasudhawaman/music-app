import React, { useEffect, useState,useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { SearchContext } from "../context/SearchContext";
const Follower = ({ username }) => {
    console.log(username)
    const [user, setusers] = useState([]);
    const [data, setdata] = useState([]);
    const {search,setSearch} = useContext(SearchContext);
   
    const handleondelete=(id)=>{
        console.log(id)
         const url = 'http://localhost:8000/playlist/deletefollower';
         async function deleteFollower(){
           
           const response= await fetch(url,{
             method:'DELETE',
             credentials:'include',
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ id:id })
           })
           const result = await response.json();
           console.log(result);
         }
        deleteFollower();
       }
    useEffect(() => {
        if(search){
            console.log(search,"useEffectran")
            const url = 'http://localhost:8000/search/follower';
            fetch(url, { method: "POST", credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({name:search}),
            }).then((response) => {
                response.json().then((data) => {
                    setusers(data)
                })
            }).catch((e) => {
                console.log(e)
            })
        }else{
        const url = 'http://localhost:8000/auth/followers';

        async function alluser() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                   
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setusers(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        alluser();
    }
    }, [search]);

    useEffect(() => {
        console.log(user)
        setdata(user)
    }, [user])
    return (
        <>
        <h1 className='text-orange-300 mt-12 font-mono text-4xl' >Followers</h1>
        <div className='flex flex-row'>
            {Array.isArray(data) && data.map((u) => {
                return (
                    <div key={u.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mt-5 mx-3 justify-center">

                        <img className="w-full" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-l mb-2 text-center text-orange-300">{u.followerusername}</div>
                            <DeleteIcon className='text-orange-300' style={{fontSize:'2rem', marginTop:'-20%'}} onClick={()=>handleondelete(u._id)}/>
                            
                        </div>
                    </div>
                );
            })}

        </div>
        </>
    )
}

export default Follower