import React,{useEffect} from "react";
import { ImSearch } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import {emptySingleLocation,getLocation,emptyLocation} from "../redux/slice/locationSlice";
import useDebounce from "../useDebounce";

const LocationInput = ({searchLocation , setSearchLocation})=>{

    
    const dispatch = useDispatch();
    const debaunceSearchLocation = useDebounce( searchLocation , 500);

    const inputHandler =(e)=>{
          setSearchLocation(e.target.value) 
    }
    
   useEffect(()=>{
         if(debaunceSearchLocation !== ""){
              dispatch(getLocation(debaunceSearchLocation))
          }
      },[debaunceSearchLocation,dispatch]);

    useEffect(()=>{
         if(debaunceSearchLocation === ""){
             dispatch(emptySingleLocation());
             dispatch(emptyLocation());
        }
           
       },[debaunceSearchLocation,dispatch]);
    
    const handleCancle = ()=>{
        setSearchLocation("");
        dispatch(emptyLocation());
        dispatch(emptySingleLocation());
    }

    const singleLocation = useSelector((state)=>state.locationReducer.singleLocation);

    useEffect(()=>{
        if(Object.keys(singleLocation).length !==0 ){
            const title = singleLocation.address.split(",")[0];
            setSearchLocation(title);
        }
    },[singleLocation])

    return (
        <>
            <div className="absolute z-[11] top-14 sm:top-20 h-12 w-[81%] inset-x-0 mx-auto">
                <input 
                    type="text" 
                    placeholder="Search Location" 
                    name="location" 
                    value={searchLocation} 
                    onChange={(e)=>inputHandler(e)}
                    className=' absolute h-full w-full focus:outline-none border  border-solid rounded-lg py-1 px-2 shadow-inputBox'
                    />
                <button className="absolute top-0 right-3 bottom-0">{searchLocation ? <MdOutlineCancel size={25} color="red" onClick={handleCancle} />:<ImSearch size={20} color="blue"/>}</button>    
             </div>
        </>
    )
}

export default LocationInput;