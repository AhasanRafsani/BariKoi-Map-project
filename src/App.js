import React,{useState,useEffect} from 'react';
import Map,{Marker} from 'react-map-gl';
import {useSelector} from "react-redux";
import ShowLocationDetails from './components/ShowLocationDetails';
import LocationList from "./components/LocationList"
import LocationInput from './components/LocationInput';
import { ImLocation2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [ searchLocation , setSearchLocation ] = useState("");
  const [ viewState , setViewState] = useState({
                                                longitude:90.1495,
                                                latitude:23.9536,
                                                zoom:6.7,
                                                pitch:30
                                                });
  
  const singleLocation = useSelector((state)=>state.locationReducer.singleLocation);
  const locationHasData = useSelector((state)=>state.locationReducer.locationHasData);
  const locationHasNoData = useSelector((state)=>state.locationReducer.locationHasNoData);
  
  useEffect(()=>{
      if(Object.keys(singleLocation).length !== 0){
            setViewState({
                    longitude:parseFloat(singleLocation.longitude),
                    latitude:parseFloat(singleLocation.latitude),
                    zoom:13,
                    pitch:30
                    })
      }
      else{
           setViewState({
               longitude: 90.1495,
               latitude: 23.9536,
               zoom:6.7,
               pitch:30
          })
      }
  },[singleLocation])
  
  useEffect(()=>{
     
    if(locationHasNoData) {
     
     toast.warn('Address not found', {
       position: "top-center",
       theme: "colored",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
  
       });
    }
  },[locationHasNoData]);
  
return (

        <div className='flex h-screen w-full'>
            <div className='hidden sm:flex sm:basis-[40%] h-full sm:bg-slate-100 sm:relative'>

                 <div className='basis-full w-full'>
                  <LocationInput searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
                 
                 { Object.keys(singleLocation).length !== 0  ? <ShowLocationDetails 
                                        address={singleLocation. address} 
                                        city={singleLocation.city} 
                                        area={singleLocation.area}
                                        postCode={singleLocation.postCode} 
                                        uCode={singleLocation.uCode} 
                                        pType={singleLocation.pType}/>  :  locationHasData.length !==0   && <LocationList/> 
                                        
                  }
                
                </div>
        
            </div>
            <div className='sm:basis-[60%] w-full sm:relative '>

                <div className='sm:hidden'>
                   <LocationInput searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
                 
                   { Object.keys(singleLocation).length !== 0  ? <ShowLocationDetails 
                                        address={singleLocation. address} 
                                        city={singleLocation.city} 
                                        area={singleLocation.area}
                                        postCode={singleLocation.postCode} 
                                        uCode={singleLocation.uCode} 
                                        pType={singleLocation.pType}/>  :  locationHasData.length !==0   && <LocationList/>
                                        
                   }
                   
                </div>
                <Map
                 {...viewState}
                   mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                   onMove={evt => setViewState(evt.viewState)}
                   style={{height:"100vh",width:"auto"}} 
                   mapStyle="mapbox://styles/mapbox/streets-v9" 
                   >
              
                  <Marker 
                     longitude={ parseFloat(singleLocation.longitude) || 90.1495}
                     latitude={ parseFloat(singleLocation.latitude) || 23.9536 }
                     offsetLeft={-20}
                     offsetTop={-10}
                  > 
                  <ImLocation2 style={{fontSize:viewState.zoom *3}} className={singleLocation.pType === "Admin" ? 'text-emerald-900' : 'text-red-600'}/> 
                  </Marker>
                </Map> 
            </div>
            <ToastContainer/>  
        </div>              
            


)
  
  
}

export default App;
