import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name:"", age:0,email:""}

export const userSlice=createSlice({

    name:"user",
    initialState:{value:initialStateValue},
    reducers:{
        login:(state, action)=>{
            //State= current or prevorius value of initial state
            //Action= object with payload and type. Payload = passing information to change a value of a variable. 

            state.value=action.payload;
        },

        logout:(state)=>{
            state.value= initialStateValue
        }

    }

});

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;