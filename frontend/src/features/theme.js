import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = "";

export const themeSlice=createSlice({

    name:"theme",
    initialState:{value:initialStateValue},
    reducers:{
        changeColor:(state, action)=>{
            //State= current or prevorius value of initial state
            //Action= object with payload and type. Payload = passing information to change a value of a variable. 

            state.value=action.payload;
        },


    }

});

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;