import { configureStore } from '@reduxjs/toolkit'

import boxesReducer from "../Features/boxes"

export const store= configureStore({
    reducer:{
      
      boxes:boxesReducer
    }
  })