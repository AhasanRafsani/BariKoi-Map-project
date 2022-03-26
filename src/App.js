
import React,{useState,useEffect} from 'react';
import Map,{Marker} from 'react-map-gl';
import {Grid} from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import {useDispatch,useSelector} from "react-redux";
import {getLocation} from "./redux/slice/locationSlice";
import Input from "./components/Input";
import ShowLocationDetails from './components/ShowLocationDetails';
import SearchLocationList from "./components/List"


function App() {
  const [ searchLocation , setSearchLocation ] = useState("");
  
  const [ viewState , setViewState] = useState({
                                                longitude:90.00,
                                                latitude:24.00,
                                                zoom:6 });
  
  const dispatch = useDispatch();

  
  const inputHandler =(e)=>{
    setSearchLocation(e.target.value)  
  }
  
  useEffect(()=>{
    if(searchLocation !==""){
        dispatch(getLocation(searchLocation)); 
     
    }
  },[searchLocation]);

  
  
  const {singleLocation,showDetailsBox} = useSelector((state)=>state.locationReducer);
  console.log(singleLocation);
  console.log(parseFloat(singleLocation.longitude));
  
return (

  <>

    <Grid container>
        <Grid item md={6}>
            
                 <Input searchLocation={searchLocation} inputHandler={inputHandler} />

                 { showDetailsBox ? <ShowLocationDetails 
                                        address={singleLocation. address} 
                                        city={singleLocation.city} 
                                        area={singleLocation.area}
                                        postCode={singleLocation.postCode} 
                                        uCode={singleLocation.uCode} 
                                        pType={singleLocation.pType}/>  :  searchLocation && <SearchLocationList/> }
        </Grid>

        <Grid item sx={12} md={6}>
            <Map
              {...viewState}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}
              onMove={evt => setViewState(evt.viewState)}
              style={{height:"100vh",width:"auto"}} 
              mapStyle="mapbox://styles/rafsani/cl17ek28k001814s7titk3atw" >
              
                <Marker 
                   longitude={ parseFloat(singleLocation.longitude) || 90.00}
                   latitude={ parseFloat(singleLocation.latitude) || 24.00 }
                   offsetLeft={-20}
                   offsetTop={-10}
                > 
                  <RoomIcon style={{fontSize:viewState.zoom *7 , color : singleLocation.pType === "Admin" ? "green" : "red"}}/> 
                </Marker>
                 
                      
             </Map>
        </Grid>
    </Grid>


   
  </>

)
  
  
}

export default App;
