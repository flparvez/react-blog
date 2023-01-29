import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { unsetUserInfo } from '../features/userSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/UserAuthApi';
import ChangePassword from './Auth/ChangePassword';



const Dashboard = () => {

  const handleLogOut=()=>{
    // console.log("Logout Clicked");
  dispatch(unsetUserInfo({email: "", name: ""}))
  dispatch(unSetUserToken({access_token: null}))
    removeToken()
    navigate("/login")
    
}
  const navigate = useNavigate()
  const dispatch = useDispatch()

   const {access_token} = getToken()
  const {data, isSuccess} = useGetLoggedUserQuery(access_token)
 const [userData, setUserData] = useState({
  email : "",
  name : ""
 })

//  Store User Data in Local State
useEffect(() => {
   if ( data && isSuccess){
    setUserData({
      email: data.email,
      name : data.name,
    })
   }
}, [data, isSuccess, dispatch])

  // console.log(data)
    
    return (
        <div className='w-[100%] flex'>

       
        <div className='w-[70%]'>
            
            <ChangePassword/>
            </div>

            <div className='text-left w-[30%] bg-blue-gray-5001 py-4'>
            <h2>Email: {userData.email}</h2>
            <h2>Name: {userData.name}</h2>
            <button
            type="submit"
            className="inline-block px-4 mt-2 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light" onClick={handleLogOut}
          >
            Logout
          </button>
    
    
            </div>
        </div>
    );
};

export default Dashboard;