import React from "react";
import {getSingleLocation} from "../redux/slice/locationSlice";
import { useDispatch } from "react-redux";
import { ImLocation2 } from "react-icons/im";

const SingleList = ({address,area,city,id})=>{

   const dispatch = useDispatch();

   const handleClick=(id)=>{
      dispatch(getSingleLocation(id));
   }

    return(
        
            
               <li className="flex items-center gap-2 cursor-pointer py-2 duration-200 hover:bg-gray-300" onClick={()=>handleClick(id)}>
                      <ImLocation2 size={30} className=" w-[15%] text-gray-900"/>
                      <div className="w-[82%]">
                          <h2 className="text-md sm:text-xl font-semibold">{address}</h2>
                          <h3 className="text-sm sm:text-lg font-semibold">{city}</h3>
                          <h3 className="text-sm sm:text-lg font-semibold">{area}</h3>
                      </div>
                </li> 
            
        
    )
}

export default SingleList;