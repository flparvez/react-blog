import React, { useEffect, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
// import { Alert } from "@material-tailwind/react";
import { useLoginUserMutation } from '../../services/UserAuthApi';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../features/authSlice';
import { useSelector } from 'react-redux';
const Login = () => {


const [server_erorr, setserver_error] = useState({})
  
 const dispatch = useDispatch()
  const navigate = useNavigate()
    const image = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'

    const [loginUser, {isLoading}]= useLoginUserMutation()
    // const loginUser = useSelector(state => state.user.formData);

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
        email: data.get('email'),
        password: data.get('password'),
      }
     
      const res = await loginUser(actualData)
      // console.log(res)
      if (res.error){
        setserver_error(res.error.data.errors)
  
       }
       
       if (res.data) {
        // console.log(typeof (res.data))
        // console.log(res.data)
        storeToken(res.data.token)
        let { access_token } = getToken()
        dispatch(setUserToken({ access_token: access_token }))
        navigate('/profile')
      }

      
    }

    let { access_token } = getToken()
    useEffect(() => {
      dispatch(setUserToken({ access_token: access_token }))
    }, [access_token, dispatch])
  
  
      // { server_erorr.email ? console.log( server_erorr.email[0]) : "" }
      // { server_erorr.password ? console.log( server_erorr.password[0]) : "" }
  
      // {server_erorr.non_field_errors ? console.log( server_erorr.non_field_errors[0]) : "" }

    
    return (
        <div>

      
            

            <section className="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img src={image} alt="" />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form id='login-form' onSubmit={handleSubmit}>
        <div className="flex space-x-2 my-4 px-2 justify-center">
        <div>
        <h2 className="text-center mb-3 bg-sky-200  mt-4">Login Here</h2>

      <Link to="/login"> <h2 className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Login</h2> </Link>
      <Link to="/register"> <h2 className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Register</h2> </Link>
          
       
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

         
          <div className="mb-6">
            <input name='password'
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
            { server_erorr.password ? <h2 className="text-white  text-sm bg-red-500  text-center">{server_erorr.password[0]}</h2> : ""  }

          </div>

          <div className="flex justify-between items-center mb-6">
           
          <Link
          to="/send-password-reset-email"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
          >Forgot password?</
        Link>
       
          </div>
       
          { server_erorr.non_field_errors ?  <h2 className="text-white my-2  bg-red-500  text-center">{server_erorr.non_field_errors }</h2> : ""}
         
          <button
            type="submit"
            className="inline-block px-7 mt-2 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <a
            className="text-white bg-blue-400 px-7 py-3  font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3.5 h-3.5 mr-2"
            >
              
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              /></svg>Continue with Facebook
          </a>
         
        </form>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Login;