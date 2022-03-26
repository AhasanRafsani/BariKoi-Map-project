import React from "react";
import { Box ,Typography,Grid,Button} from "@mui/material"
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
   detailsBox:{
        minHeight:"40vh",
        width:"70%",
        margin:"150px auto",
        
      }
 });

const ShowLocationDetails = ({address,city,area,postCode,uCode,pType})=>{


    const classes = useStyle();
    return(
        <>
           <Box className={classes.detailsBox}>
             <Box sx={{marginBottom:"20px"}}>
               <Typography variant="h4">{address}</Typography>
               <Typography sx={{display:"inline"}} variant="h6">{address}, </Typography>
               <Typography sx={{display:"inline"}} variant="h6">{area}, </Typography>
               <Typography sx={{display:"inline"}} variant="h6">{city} </Typography>
               <Typography variant="h6"> PostCode :{postCode}</Typography>
               <Typography variant="h6">{pType}</Typography>
               <Typography variant="h6"> PlaceCode : {uCode}</Typography>
            </Box>
               <Typography variant="body1">Explore NearBy</Typography>
                 <Grid container>
                   <Button sx={{margin:"0px 5px 0px 10px"}} variant="outlined">Food</Button>
                   <Button sx={{marginRight:"5px"}} variant="outlined">Bank</Button>
                   <Button sx={{marginRight:"5px"}} variant="outlined">Health</Button>
                   <Button variant="outlined">Education</Button>
                 </Grid>
           </Box>
        </>
    );
}

export default ShowLocationDetails ;