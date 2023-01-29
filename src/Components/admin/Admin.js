import React, { useEffect } from 'react';


import { Link } from 'react-router-dom';
import { fetchData } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';


function Admin() {
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
    <div className="bg-gray-200 h-screen ">
      <nav className="bg-white p-6">
        <h1 className="text-lg font-medium">Admin Dashboard</h1> 
        <button className="bg-red-500 text-white p-2 rounded-sm"><Link to='add-blog'>Add Blog</Link></button>
      </nav>
      <div className="p-5">
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Title</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Author</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(post => (
              <tr key={post.id}>
                <td className="p-2 border-t border-gray-200">{post.title}</td>
                <td className="">{post.name}</td>
                <td className="p-2 border-t border-gray-200">
                  <button className="bg-blue-500 text-white p-2 m-2 rounded-sm"> <Link to={`/admin/edit-blog/${post.id}`}>Edit </Link></button>
                  <button className="bg-red-500 text-white p-2 rounded-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
