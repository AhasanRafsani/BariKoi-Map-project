
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLocation = createAsyncThunk("location/getLocation",
  async(searchLocation,{rejectWithValue})=>{
     try{
        const result = await axios.get(process.env.REACT_APP_BAKCEND_API+searchLocation); 
 
        //console.log(result);
        if(result.data.message){
           return result.data.message;
        }
        else{
           return result.data.places;
        }
      }catch(err){
         return rejectWithValue(err.message);
      }
  } 
);

export const locationSlice = createSlice({
      name:"location",
      initialState:{
          loading:false,
          hasError:null,
          locationHasData:[],
          locationHasNoData:null,
          singleLocation:{},
          
    
      },
      reducers:{
         getSingleLocation:(state,action)=>{
             const findLoc = state.locationHasData.find((val)=> val.id === action.payload);
             state.singleLocation = findLoc;
         },
         emptySingleLocation:(state)=>{
            state.singleLocation={};
         },
         emptyLocation:(state)=>{
            state.locationHasData=[];
            state.locationHasNoData = null;
         }
         
      },
      extraReducers:{
         [getLocation.pending]:(state)=>{
             state.loading=true;
         },
         [getLocation.fulfilled]:(state,action)=>{
            state.loading=false;

            if(action.payload==="Address not found"){
               state.locationHasNoData = action.payload;
            }else{
               state.locationHasData = action.payload;
               state.locationHasNoData = null;
            }
         },
         [getLocation.rejected]:(state,action)=>{
            state.loading=false;
            state.hasError=action.payload ;
         }
      }

});

export const {getSingleLocation,emptySingleLocation,emptyLocation} = locationSlice.actions


