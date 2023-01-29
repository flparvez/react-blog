import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from "react";


import { useDispatch, useSelector } from 'react-redux';
import { fetchDataBySlug } from '../../redux/action';



const DetailsPage = (props) => {
  
    // let { slug } = useParams();
  

// const [data, setdata] = useState([])

const [slug, setSlug] = useState(props.slug);
  const dispatch = useDispatch();
  const data = useSelector(state => state.blog.data);
  const error = useSelector(state => state.blog.error);

  useEffect(() => {
    dispatch(fetchDataBySlug(slug));
  }, [slug,dispatch]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

       console.log(data)


    return (



<div key={data.id} className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
  <h2>Data with ID: {data.id}</h2>
      <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      
                      <div>
                      
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
          </header>
         <p>{data.content}</p>
          <figure><img src={data.image} alt=""/>
              <figcaption>Digital art by Anonymous</figcaption>
          </figure>
      </div>
       </div>
       </div>

    );
};

export default DetailsPage;