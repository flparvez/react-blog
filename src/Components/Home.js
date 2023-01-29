import React from 'react';

// import BlogData from '../redux/BlogsData';
import Blogs from './Blog/Blogs';


const Home = () => {
    return (
        <div className='px-4'>
            <h1 className='text-red-500'> Home Page</h1>
          
            <Blogs/>
           
        </div>
    );
};

export default Home;