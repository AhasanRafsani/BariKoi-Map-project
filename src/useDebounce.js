import React,{ useEffect,useState } from "react";

const useDebounce = (value,delay)=>{

   const [ debounceValue , setDebounceValue ] = useState(value);

   useEffect(()=>{
    
       let time = setTimeout(()=>{
           setDebounceValue(value);
       },delay);

        return ()=> clearTimeout(time);

      },[value]);
    
     return  debounceValue;
   
}

export default useDebounce;