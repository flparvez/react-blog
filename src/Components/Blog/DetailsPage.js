import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsPage = () => {
    // http://127.0.0.1:8000/blog-api/blogs/?slug=${slug}
    const [blogDetails, setblogDetails] = useState([]);
    const [postIngredients, setPostIngredients] = useState("");
console.log(postIngredients)
    let { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(
              `https://flparvez.up.railway.app/api/blogsD/?slug=${slug}`
            );
            setblogDetails(res.data);
            setPostIngredients(res.data.ingredients);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [slug]);
      console.log(blogDetails);
    
    return (
        <div>
        { blogDetails.map((data)=> (


      
        <div key={data.id} className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      
            <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            
                            <div>
                            
                                <p className="text-base font-light text-black dark:text-gray-400">Author Name : {data.name}</p>
                                <p className="text-base font-light text-gray-500 dark:text-gray-400">{ data.created_at }</p>
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
             
             ) )}
             </div>
        
    );
};

export default DetailsPage;