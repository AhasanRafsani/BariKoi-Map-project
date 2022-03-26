import { configureStore  } from '@reduxjs/toolkit'
import {locationSlice} from "./slice/locationSlice"

export const store = configureStore({
   reducer:{
           locationReducer : locationSlice.reducer
   }
  
});