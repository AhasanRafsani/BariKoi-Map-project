
import {List,Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useSelector} from "react-redux";
import LocationList from './LocationList';

const useStyle = makeStyles({
   
    listBox:{
        boxSizing:"border-box",
        width:"80%",
        maxHeight:"400px",
        margin:"63px auto",
        overflow:"auto"
      }
     
  });

const SearchLocationList = ()=>{
    const {loading,location} = useSelector((state)=>state.locationReducer);
    const classes = useStyle();
    return(
        <>
            <Paper className={classes.listBox}>
                   <List sx={{width:"100%"}}>
                     {
                        loading ? "" : location.map((val,index)=>(
                           <LocationList key={index} id={val.id} address={val.address} area={val.area} city={val.city} pType={val.pType}/>
                      ))
                        }
                    </List>
                  </Paper>
        </>
    )
}
export default SearchLocationList;