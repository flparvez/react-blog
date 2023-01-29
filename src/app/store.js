// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/UserAuthApi'
// import authReducer from '../features/authSlice'
// import userReducer from '../features/userSlice'
// import { blogSlice } from '../features/blogApiSlice'
// import { applyMiddleware } from 'redux'
import { blogApi } from '../services/blogApi'


// export const store = configureStore({
//   reducer: {
//     [userAuthApi.reducerPath]: userAuthApi.reducer,
//     [blogApi.reducerPath]: blogApi.reducer,
//     auth: authReducer,
//     user: userReducer,
//     blog: blogSlice,
//   }, 

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userAuthApi.middleware,blogApi.middleware),
//
// })

// setupListeners(store.dispatch)


import { configureStore } from '@reduxjs/toolkit';
// import { createStore,applyMiddleware } from 'redux'

// import { logger } from 'redux-logger';

// import thunk from 'redux-thunk'
import { Reducer } from '../redux/reducer';

const store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware,blogApi.middleware),
 
  })
  
  // Store specifically has the thunk and logger middleware applied
// const store = createStore(Reducer, applyMiddleware(logger,thunk), 
 
//     );



export default store;
