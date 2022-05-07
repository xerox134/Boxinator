import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import box from './box'

export const getBoxes = createAsyncThunk(
    'boxes/getBoxes',
    async()=>{
        const response = await axios.get("http://localhost:8080/rest/boxes");
        return response.data
    })


const boxesSlice = createSlice({
  name: 'boxes',
  initialState:{
      list:[],
      status:null
  },

  extraReducers: {
    
    
    [getBoxes.pending]:(state,action)=>{
          state.status='loading'
      },
      [getBoxes.fulfilled]: (state,{payload})=>{
          state.list=payload
          state.status = 'success'
      },
      [getBoxes.rejected]:(state,action)=>{
          state.status='failed'
      }
    
}

 })


 export default boxesSlice.reducer
