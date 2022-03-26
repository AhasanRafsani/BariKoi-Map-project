import React from "react";
import {ListItem,ListItemIcon,ListItemText,Typography,Divider,Button} from "@mui/material";
import {getSingleLocation,setDetailsBox} from "../redux/slice/locationSlice"
import { useDispatch } from "react-redux";
import RoomIcon from '@mui/icons-material/Room';

const LocationList = ({address,area,city,pType,id})=>{

   const dispatch = useDispatch();

   const handleClick=(id)=>{
      dispatch(getSingleLocation(id));
      dispatch(setDetailsBox(true));
   }
    return(
        <>
            
               <ListItem alignItems="flex-start" component={Button} onClick={()=>handleClick(id)}>
                   <ListItemIcon sx={{marginTop:"20px"}}>
                       <RoomIcon/>
                   </ListItemIcon>
                   <ListItemText
                      primary={address}
                      secondary={
                    <>
                       <Typography variant="body2">{city}</Typography>
                       <Typography variant="body2">{pType}</Typography>
                    </>
                    }
                   />
                </ListItem>
               <Divider variant="inset" component="li" />
            
        </>
    )
}

export default LocationList;