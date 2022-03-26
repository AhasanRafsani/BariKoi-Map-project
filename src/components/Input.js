import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {TextField,Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { useDispatch } from "react-redux";
import {setDetailsBox} from "../redux/slice/locationSlice"
const useStyle = makeStyles({
   
    inputField:{
      width:"80%",
      position:"relative",
      top:"60px",
      left:"67px",
      
    },
    searchButton:{
      position:"relative",
      top:"70px",
      left:"0",
      zIndex:1
    }
  });

const Input = ({searchLocation,inputHandler})=>{
   const dispatch = useDispatch();

    const handleClick=(e)=>{
        console.log("handleClick");
        dispatch(setDetailsBox(false));
    }
    const classes = useStyle();
    return(
        <>
            <TextField 
                 type="text" 
                 placeholder="Search Location"
                 value={searchLocation} 
                 onChange={inputHandler}
                 className={classes.inputField}
                 />
                 
            <Button onClick={handleClick} className={classes.searchButton}>{searchLocation ? <CloseIcon />:<SearchIcon/>}</Button>
        </>
    )
}
export default Input;