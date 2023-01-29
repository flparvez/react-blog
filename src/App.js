import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import  store from './app/store';
import AddPost from './Components/admin/AddPost';
import Admin from './Components/admin/Admin';
import EditPost from './Components/admin/EditPost';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ResetPassword from './Components/Auth/ResetPassword';

import SendPasswordResetEmail from './Components/Auth/SendPasswordResetEmail';
import DetailsPage from './Components/Blog/DetailsPage';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Video from './Components/Video';
// import { getToken } from './services/LocalStorageService';



const App = () => {

  

  const { access_token } = useSelector( state => state.auth)
  // const { access_token } = getToken()
    console.log(store.getState())
   
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
    
     
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/layout' element={<Layout/>}> </Route>
      <Route path='/register' element= { !access_token ?  <Register/> : <Navigate to="/profile" />}> </Route>
      <Route path='/login' element={ !access_token ?  <Login/> : <Navigate to="/profile" />}> </Route>
       <Route path='/send-password-reset-email' element={<SendPasswordResetEmail/>}> </Route>
      <Route path='api/user/reset/:id/:token/' element={<ResetPassword/>}> </Route>
      <Route path='/profile' element={ access_token ? <Dashboard/> : <Navigate to="/login" /> }> </Route>
      <Route path='/video' element={<Video/>}> </Route>
      
      <Route path="/details/:slug" element={<DetailsPage />} />
       <Route path="/category/:id" element={<Home />} />
       <Route path="/admin/add-blog" element={<AddPost/>} />
       <Route path="/admin/edit-blog/:id" element={<EditPost/>} />
       <Route path="/admin" element={<Admin/>} />
      
      

      </Routes>
    </BrowserRouter>
  );
};

export default App;