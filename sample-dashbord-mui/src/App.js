import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import {styled, Typography, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from '@mui/material/styles'
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext=React.createContext({toggleColorMode: ()=>{} });

function App() {
const Myapp=()=>{
  const theme=useTheme();
  const coloMode=React.useContext(ColorModeContext)
  return(
    <>
    <IconButton sx={{ml:1}} onClick={coloMode.toggleColorMode} color='inherit'>
      {
        theme.palette.mode ==='dark' ?<Brightness7Icon/>:<Brightness4Icon/>
      }
      
    </IconButton>
    </>
  );
  

}

  // const BlueButton=Styled.

  const BlueButton= styled(Button)({
    backgrounColor:"red",
    color:"red",
    "& hover":{
      backgrounColor:"lightblue"
    }

  })
  return (
    <div>
      
      <Button>hello</Button>
      <Button variant="outlined" size="large" sx={{
        width:200,height:50
      }}>outlined</Button>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon/>}
      sx={{
        borderRadius:8
      }}>
        Outlined
        
      </Button>
      <Typography variant="h2" color="green" component="h2">typography</Typography>
      <Button variant="contained" color="primary" startIcon={<AddIcon/>}>Add</Button>
      <Button variant="contained"  sx={{
        borderRadius:8,
        backgrounColor:"black",
        color:"blue",
        "&:hover":{
          backgrounColor:"red",
          color:"black"

        }
      }}>
        Custom Button
      </Button>
      <Button variant="contained"  sx={{
        borderRadius:8,
        backgrounColor:"black",
        color:"blue",
        "&:hover":{
          backgrounColor:"red",
          color:"black"

        }
      }}>
        Custom Button
      </Button>
      <BlueButton variant="contained">Bluebutton</BlueButton>
      <Myapp/>
    </div>
  );
}

export default App;
