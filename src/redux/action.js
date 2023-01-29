import axios from 'axios';

// import { useParams } from 'react-router-dom';




// export const FETCH_DATA_START = 'FETCH_DATA_START';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_BLOG_START = 'FETCH_BLOG_START';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';

export const ADD_BLOG_START = 'ADD_BLOG_START';
export const ADD_BLOG_SUCCESS = 'ADD_BLOG_SUCCESS';
export const ADD_BLOG_FAILURE = 'ADD_BLOG_FAILURE';
export const ADD_BLOG_RESET = 'ADD_BLOG_RESET';




export const fetchData = () => dispatch => {

  dispatch({ type: FETCH_BLOG_START });
  
  axios.get('https://flparvez.up.railway.app/api/blogs/')
    .then(res => {
      dispatch({ type: FETCH_BLOG_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_BLOG_FAILURE, payload: err });
    });
};

export const saveFormData = data => ({
  type: 'SAVE_FORM_DATA',
  payload: data
});


export const AddData = (FormData) => dispatch => {

  try{
  dispatch({ type: ADD_BLOG_START });
  
  const { data } = axios.post('https://flparvez.up.railway.app/api/blogs/', FormData)
    dispatch({
      type: ADD_BLOG_SUCCESS,
      payload: data
    })
    
  }catch (error) {
      dispatch({
        type: ADD_BLOG_FAILURE,
        payload: error.response && error.response.data.message
      })

    }
};




// export const updatePost = (id, updates) => async dispatch => {
//   const response = await axios.put(`/api/posts/${id}/`, updates);
//   dispatch({ type: UPDATE_POST, payload: response.data });
// }


