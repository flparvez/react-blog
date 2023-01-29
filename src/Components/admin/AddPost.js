import React, {  useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSaveProfileMutation,useGetResumeProfileQuery } from '../../services/candidateProfile.api';
 import { useNavigate } from 'react-router-dom'
import { useAddPostMutation, useGetBlogQuery } from '../../services/UserAuthApi';


 
const AddPost = () => {
 

// const dispatch = useDispatch()
const navigate = useNavigate()

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [slug, setSlug] = useState();
    
    const [content, setContent] = useState();
    // const [dob, setDob] = useState()
    const [image, setImage] = useState(null)
    const [cg, setCg] = useState();
    
    
    
    const sl = slug ? slug : ''
    
    const slugs= sl.toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // console.log(slugs)
   
const [error, setError] = useState({
    status: false,
    msg:'',
    type:''

})
const [suc, setSuc] = useState({
    status: false,
    msg:'',
    type:''

})


const [candidates, setCandidates] = useState([])
console.log(candidates);

  // Clear Form
  const resetForm = () => {
    setName('')
    setTitle('')
    setSlug('')
    // setDob('')
    setCg('')
    
    setImage('')
    // setLabel('')
   
    document.getElementById('resume-form').reset()
  }


// RTK QUERY

const [ addPost ] = useAddPostMutation()
const { data, isSuccess } = useGetBlogQuery()


useEffect(() => {
  if (data && isSuccess) {
    setCandidates(data.candidates)
 
  }
}, [data, isSuccess])


  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const data = new FormData()

    data.append('name', name)
    data.append('title', title)
    data.append('slug', slugs)
   
    data.append('content', content)
    data.append('image', image)
    data.append('category', cg)

    // console.log(data);


 

    if (title && content) {
      const res = await addPost(data)
      console.log(res);
      
      if (res.data.status === "success") {
        setSuc({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
  
        // reset form
        resetForm()
        navigate('/')
        
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  
  }
  
  
// name='dob' id='dob' value={dob} onChange={(newValue) => { setDob(newValue) }}
    return (
       
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-5 ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          
          <form onSubmit={handleSubmit} className="mt-6" encType='multipart/form-data' noValidate id='resume-form'>




            <div className="mb-2 ">
              <label>
                <span className="text-gray-700">Author Name</span>
                <input id='name'  onChange={(e)=> {setName(e.target.value)}}
                  type="text"
                  name="name" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                 
                />
              </label>
            </div>


            <div className="mb-2 ">
              <label>
                <span className="text-gray-700">Blog Title</span>
                <input id='name'  onChange={(e)=> {setTitle(e.target.value)}}
                  type="text"
                  name="title" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                 
                />
              </label>
            </div>

<div className="mb-2 ">
              <label>
                <span className="text-gray-700">Slug</span>
                <input id='name'    onChange={(e)=> {setSlug(e.target.value)}}
                  type="text"
                  name="slug" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  
                />
              </label>
            </div>


     <div className="mb-2">
              <label>
                <span className="text-gray-700">Content</span>
                <input id='email'  onChange={(e)=> {setContent(e.target.value)}}
                  type="text"
                  name="content" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  
                />
              </label>
            </div>

         




        <div className="mb-2">
        <label>
        <span className="text-gray-700">Image Upload</span>
          <input id='profile-photo' 
            type="file" onChange={(e) => setImage(e.target.files[0])} 
            name="image" 
            className="
            block w-full text-sm text-gray-900  border-solid border-2 border-sky-500 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
      
            
          />
         
        </label>
      </div>

      <div className="mb-2 ">
      <label>
        <span className="text-gray-700">Category Name</span>
        <input id='name'    onChange={(e)=> {setCg(e.target.value)}}
          type="text"
          name="cg" required
          className="

      w-full
      block px-16 py-2 mt-2
      border-solid border-2 border-sky-500
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
          
        />
      </label>
    </div>

      
       




        <div className='justify-center text-center'>
        <button  className='bg-orange-600 p-2 my-3 text-center' type='submit'>
        Submit
        </button>
       
        {error.status ? <h2 >{error.msg}</h2> : ''}
        {suc.status ? <h2 className='text-black bg-green-400'>{suc.msg}</h2> : ''}
        </div>

 
          </form>
            </div>
            </div>
            
     
      
       
        
    );
};

export default AddPost;