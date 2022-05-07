import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBoxes = createAsyncThunk(
    'boxes/getBoxes',
    async()=>{
        const response = await axios.get("http://localhost:8080/rest/boxes");
        console.log(response.data)
        return response.data
    })
    
    export const getWeight = createAsyncThunk(
    'boxes/getWeight',
    async()=>{
        const response = await axios.get("http://localhost:8080/rest/boxes/weight");
        console.log(response.data)
        return response.data
    })
    
    export const getSum = createAsyncThunk(
    'boxes/getSum',
    async()=>{
        const response = await axios.get("http://localhost:8080/rest/boxes/shipping");
        console.log(response.data)
        return response.data
    })

 const initialStateValue ={status:"",box:[],totalWeight:0,totalShipping:0
}

const boxesSlice = createSlice({
  name: 'boxes',
  initialState:{value:initialStateValue},

  extraReducers: {
     

    //BOXES
    [getBoxes.pending]:(state)=>{
          state.value.status='boxes loading'
      },
      [getBoxes.fulfilled]: (state,{payload})=>{
          state.value.box=payload
          state.value.status = ''
      },
      [getBoxes.rejected]:(state)=>{
        state.value.status='failed to load boxes!'
      },

      // Weight
      [getWeight.pending]:(state)=>{
          state.value.status='boxes loading'
      },
      [getWeight.fulfilled]: (state,{payload})=>{
          state.value.totalWeight=payload
          state.value.status = ''
      },
      [getWeight.rejected]:(state)=>{
        state.value.status='failed to load boxes!'
      },    
      
      //SUM
      [getSum.pending]:(state)=>{
          state.value.status='boxes loading'
      },
      [getSum.fulfilled]: (state,{payload})=>{
          state.value.totalShipping=payload
          state.value.status = ''
      },
      [getSum.rejected]:(state)=>{
        state.value.status='failed to load boxes!'
      }
    
    
}

 })


 export default boxesSlice.reducer
