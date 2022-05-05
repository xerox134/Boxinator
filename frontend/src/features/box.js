import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name:"", weight:0,color:"",country:""};

export const boxSlice=createSlice({

    name:"box",
    initialState:{value:initialStateValue},
    reducers:{
        sendBox:(state, action)=>{
            //State= current or prevorius value of initial state
            //Action= object with payload and type. Payload = passing information to change a value of a variable. 

            state.value=action.payload;
        },

        getBox:(state,action)=>{
            state.value=action.payload
        }


    }

});

export const {changeColor} = boxSlice.actions;

export default boxSlice.reducer;