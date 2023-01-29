
import { FETCH_BLOG_SUCCESS, FETCH_BLOG_START,FETCH_BLOG_FAILURE ,ADD_BLOG_RESET, ADD_BLOG_START,ADD_BLOG_SUCCESS,ADD_BLOG_FAILURE } from "./action";

import authReducer from '../features/authSlice'
import { userAuthApi } from '../services/UserAuthApi'
import userReducer from '../features/userSlice'
import { combineReducers } from "@reduxjs/toolkit";




const blogsreducer = (blogstate = { data: {}, error: null } , action) => {

   switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { ...blogstate, data: action.data, error: null };
    case 'FETCH_DATA_ERROR':
      return { ...blogstate, data: [], error: action.error };
    default:
      return blogstate;
  }
};
 


     const blogreducer = (bstate ={
          data: [],
          isLoading: false,
          error: null } , action) => {
          switch (action.type) {
      
 case FETCH_BLOG_START:
        return { ...bstate, isLoading: true, error: null };
      case FETCH_BLOG_SUCCESS:
        return { ...bstate, data: action.payload, isLoading: false };
      case FETCH_BLOG_FAILURE:
        return { ...bstate, error: action.payload, isLoading: false };
      default:
        return bstate;


    }
  }


    const addblogreducer = (state ={ } , action) => {
          switch (action.type) {
      
 case ADD_BLOG_START:
        return { ...state, isLoading: true, error: null };
      case ADD_BLOG_SUCCESS:
        return { ...state, data: action.payload, isLoading: false };
      case ADD_BLOG_FAILURE:
        return { ...state, error: action.payload, isLoading: false };
        case ADD_BLOG_RESET:
        return { };
        
      default:
        return state;


    }
  }

 
  

// const editblog = (state = { posts: {} } , action) => {
//     switch (action.type) {
//         case UPDATE_POST:
//             // Find the index of the post to update
//             const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
//             // Create a new array with the updated post
//             const updatedPosts = [
//                 ...state.posts.slice(0, postIndex),
//                 action.payload,
//                 ...state.posts.slice(postIndex + 1)
//             ];
//             return {
//                 ...state,
//                 posts: updatedPosts
//             };
//         default:
//             return state;
//     }
// };





  export const Reducer = combineReducers({
    // userapi: userAuthApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
   
    auth: authReducer,
    user: userReducer,
    // user: registerreducer,
   blog: blogsreducer,
   blogs: blogreducer,
   addblog: addblogreducer,
  
   

})
