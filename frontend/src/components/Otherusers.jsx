import React, { useEffect, useState } from 'react'
import SideComponent from './SideComponent';
import Header from './Header';
const Otherusers = ({username}) => {
    const [data, setdata] = useState([])
useEffect(() => {
        const url = 'http://localhost:8000/auth/all';
        async function alluser() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setdata(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        alluser();
    }, []);

   

    async function updateFollow(id){
      
        const url = 'http://localhost:8000/auth/allfollow';

        const response = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id:id})
        });
        const result= await response.json()
        console.log(result)
    }
    return (
        <div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />

<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
      <div className='mt-14 flex flex-row '>
            {Array.isArray(data) && data.map((u) => {
                return (
                    <div key={u._id} className="h-1/2 max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mt-5 mx-3 justify-center">
                        <div className="px-6 py-4">
                            <div className="font-bold text-l mb-2 text-center text-white">{u.username}</div>
                        </div>
                        <button className='bg-orange-300 h-8 w-20 rounded-md ml-3 mb-3' onClick={()=>{updateFollow(u._id)}}>Follow</button>
                    </div>
                );
            })}

        </div>
   
</div>
  </div>
        
    )
}

export default Otherusers