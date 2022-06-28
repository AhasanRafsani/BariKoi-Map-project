import {useSelector} from "react-redux";
import SingleList from "./SingleList";



const LocationList = ()=>{
    const locationHasData = useSelector((state)=>state.locationReducer.locationHasData);
    const loading = useSelector((state)=>state.locationReducer.loading);
    
    return(
        <>
            <div className=' absolute z-[10] top-[103px] rounded-b-lg sm:top-[128px] inset-x-0 mx-auto  w-[80%] md:h-[60%] h-[50%]   mt-[2px] overflow-y-scroll scrollbar-thin   scrollbar-thumb-zinc-600   bg-slate-100  text-black  shadow-listBox  '>
                   <ul className='divide-y w-full'>
                     {
                        loading ? "" : locationHasData.map((val,index)=>(
                           <SingleList key={index} id={val.id} address={val.address} area={val.area} city={val.city} pType={val.pType}/>
                      ))
                        }
                    </ul>
            </div>
        </>
    )
}
export default LocationList;