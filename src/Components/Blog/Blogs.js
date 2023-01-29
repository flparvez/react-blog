import React, { useEffect } from 'react';



import { Link } from 'react-router-dom';
import { fetchData } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';





const Blogs =()=> {

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.data);
  const error = useSelector(state => state.blogs.error);

  // console.log(blogs)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!blogs) {
    return <p>Loading...</p>;
  }

  
  
    
   



    return (
     
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
       


   
      <h2 className="text-3xl font-bold">Latest Product</h2>
			
      <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
        
      </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

      {blogs && blogs.map(blog => (
      
        <div key={blog.id} className="space-y-2 text-center">
       
      
       
			
	<Link to={`/details/${blog.slug}`}>
			
    <article className="flex flex-col dark:bg-gray-900">
    
    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.image} />
    
    <div className="flex flex-col flex-1 p-6">
     
   
      <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
    
      

      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
        <span>{blog.created_at}</span>
      
      </div>
    </div>
  </article>
  </Link>

  
      </div>
    
		
  

  ))
  }
  </div>
</section>
        
        
        

    
    );
};



export default  Blogs;