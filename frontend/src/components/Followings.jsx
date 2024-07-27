import React, { useEffect, useState ,useContext} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import SideComponent from './SideComponent';
import Header from './Header';
const Followings = ({ username, setuser }) => {
  const backend =process.env.REACT_APP_BACKEND;
  const [user, setusers] = useState([]);
  const [data, setdata] = useState([])
const navigate =useNavigate()
const {search,setSearch} = useContext(SearchContext)
  const handleondelete = (id) => {
    const url = `${backend}/playlist/deletefollower`;
    async function deleteFollower() {

      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id })
      })
      const result = await response.json();
      console.log(result);
    }
    deleteFollower();
  }
  useEffect(() => {
   
    const url = `${backend}/auth/followings`;

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
    

    alluser();
  }
  }, []);

  useEffect(() => {
    setdata(user)
  }, [user])
  return (
    <div className=" w-screen h-screen grid grid-cols-7">
   <SideComponent />

<div className="w-full col-start-0 sm:col-start-2 col-span-7 sm:col-span-5">
      <Header />
      <div>
      <h1 className='text-orange-300 mt-14 font-roboto text-lg sm:text-2xl' >Followings</h1>
      <div className='flex flex-row'>

        {Array.isArray(data) && data.map((u) => {
          return (<Link to='/followuser'>
            <div onClick={() => setuser(u.followingusername)}>
              <div key={u._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mt-5 mx-3 justify-center h-24 w-36 ">
                <div className="px-6 py-2 sm:py-4">
                  <div className="font-bold text-l mb-2 text-center text-white text-orange-200">{u.followingusername}<DeleteIcon className='text-orange-300 text- ml-0 sm:ml-4' onClick={(e) => { e.stopPropagation(); handleondelete(u._id); navigate('/followings')}} /></div>
                  
                </div>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </div>
</div>
  </div>
   
  )
}

export default Followings