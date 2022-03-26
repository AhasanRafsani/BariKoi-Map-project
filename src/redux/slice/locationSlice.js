
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLocation = createAsyncThunk("location/getLocation",
  async(searchLocation)=>{
    const result = await axios.get(`https://barikoi.xyz/v1/api/search/autocomplete/MzE0ODpIRUgzN0lYSTZR/place?q=${searchLocation}`); 
 
    console.log(result.data.places);
    return result.data.places;
  } 
);

export const locationSlice = createSlice({
      name:"location",
      initialState:{
          loading:false,
          hasError:null,
          location:[],
          singleLocation:{},
          showDetailsBox:false
    
      },
      reducers:{
         getSingleLocation:(state,action)=>{
             const findLoc = state.location.find((val)=> val.id === action.payload);
             state.singleLocation = findLoc;
         },
         setDetailsBox:(state,action)=>{
            state.showDetailsBox = action.payload
         }
      },
      extraReducers:{
         [getLocation.pending]:(state,action)=>{
             state.loading=true
         },
         [getLocation.fulfilled]:(state,action)=>{
            state.loading=false;
            state.location = action.payload;
         },
         [getLocation.rejected]:(state,action)=>{
            state.loading=false;
            state.hasError=action.payload ;
         }
      }

});

export const {getSingleLocation,setDetailsBox} = locationSlice.actions


