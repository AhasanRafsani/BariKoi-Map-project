import { useEffect,useState } from "react";

const useDebounce = (value,delay)=>{

   const [ debounceValue , setDebounceValue ] = useState(value);

   useEffect(()=>{
    
       let time = setTimeout(()=>{
           setDebounceValue(value);
       },delay);

        return ()=> clearTimeout(time);

      },[value,delay]);
    
     return  debounceValue;
   
}

export default useDebounce;