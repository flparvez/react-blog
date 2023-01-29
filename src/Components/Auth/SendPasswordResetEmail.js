
import React, { useState } from 'react';
// import {   useNavigate } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";
import { getToken } from '../../services/LocalStorageService';
import { useSendPasswordResetEmailMutation } from '../../services/UserAuthApi';
const SendPasswordResetEmail = () => {
  const [server_erorr, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail ] = useSendPasswordResetEmailMutation()


    
      // const navigate = useNavigate()
        
        const handleSubmit = async(e)=>{
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const actualData = {
            email: data.get('email'),
            
          }
         
          const res = await sendPasswordResetEmail(actualData)
          if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error.data.errors)
            setServerMsg({})
            setServerError(res.error.data.errors)
          }
          if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            setServerError({})
            setServerMsg(res.data)
            document.getElementById('password-reset-email-form').reset()
          }
           }
        
        return (
            <div>
                
    
                <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
         
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form id='password-reset-email-form' onSubmit={handleSubmit}>
            <div className="flex space-x-2 my-4 px-2 justify-center">
            <div>
            <h2 className="text-center mb-3 bg-sky-200  mt-4">Reset Password</h2>
    
             
           
              </div>
          </div>
    
              <div className="mb-6">
                <input
                  type="text" name='email'
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
                { server_erorr.email ? <h2 className="text-white  text-sm bg-red-500  text-center">{server_erorr.email[0]}</h2> : ""  }


              </div>
    
             
            
              { server_erorr.non_field_errors ?  
                <Alert color='red'>{server_erorr.non_field_errors} </Alert>
                 : ""}
             
              {server_msg.msg ? <Alert color='green'> {server_msg.msg}</Alert> : ''}
              
             
            
              <button
                type="submit"
                className="inline-block px-7 mt-2 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Send
              </button>
    
            
    
          
             
            </form>
          </div>
        </div>
      </div>
    </section>
            </div>
   
        
    );
};

export default SendPasswordResetEmail;