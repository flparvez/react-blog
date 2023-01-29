import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataApi: "",
}

export const blogSlice = createSlice({
  name: 'blogapi',
  initialState,
  reducers: {
    setdataApi: (state, action) => {
      state.dataApi = action.payload.dataApi
     
    },
    unsetdataApi: (state, action) => {
      state.dataApi = action.payload.dataApi
     
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { setdataApi, unsetdataApi } = blogSlice.actions

export default blogSlice.reducer