import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Features/user"
import themeReducer from "../Features/theme"
import boxReducer from "../Features/box"
import boxesReducer from "../Features/boxes"

export const store= configureStore({
    reducer:{
      user:userReducer,
      theme:themeReducer,
      box:boxReducer,
      boxes:boxesReducer
    }
  })